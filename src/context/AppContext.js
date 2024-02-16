import { createContext, useState } from "react";
import { baseUrl } from "../baseUrk";
import { useNavigate } from "react-router";
// step1 context creation
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([])

    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null)
    const navigate = useNavigate()

    // data filling pending
    async function fetchBlogPosts(page = 1, tag = null, category) {
        setLoading(true);
        let url = ` ${baseUrl}?page=${page}`
        if (tag) {
            url += `&tag=${tag}`
        }
        if (category) {
            url += `&category=${category}`
        }
        console.log('printing the final url');
        console.log(url);

        try {

            const result = await fetch(url)
            const data = await result.json();
            if (!data.posts || data.posts.length === 0)
                throw new Error('something went wrong')
            console.log("Api Response", data);
            setPage(data.page)
            setPosts(data.posts)
            setTotalPages(data.totalPages)
        } catch (error) {
            console.log(error);
            setPage(1)
            setPosts([])
            setTotalPages(null)
        }
        setLoading(false)
    }

    function handlePageChange(page) {
        navigate({search:`?page=${page}`});
        setPage(page)
        fetchBlogPosts(page)
       

    }

    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange,

    }
    // step 2 context provide
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}