import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router';
import Header from '../component/Header';
import Card from '../component/Card';
import { AppContext } from '../context/AppContext'

export default function BlogPage() {
  
    const [blog, setBlog] = useState(null);
    const [relatedblogs, setRelatedBlogs] = useState([])
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading , loading,baseurl} = useContext(AppContext)
    const  blogId = location.pathname.split('/').at(-1)
    async function fetchBlogPosts(){
        setLoading(true)
        let url = `${baseurl}`
        try {
            const res = await fetch(url)
            const data = await res.json()
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs) 
        } catch (error) {
            console.log('erroer aya in blog');
            setBlog(null)
            setRelatedBlogs([])
        }
        setLoading(false);
    }
    useEffect(()=>{
      if (baseurl) {
        fetchBlogPosts()
      }

    },[location.pathname])
  return (
    <div>
         <Header></Header>
         <div>
          <button onClick={()=> navigation(-1)}>
            back
          </button>
         </div>
         {
          loading ?
          (<div> <p>Loading</p></div>)
            : 
          blog ?
           ( 
           <div>
            <Card post ={blog}></Card>
             <h2>Related post</h2>   
             {
              relatedblogs.map((post) => (
                <div key = {post.id}>
                  <Card post ={post}/>
                </div>
              ))
             }
             </div> )
              :(<p> No blog Found</p>) 
         }
    </div>
  )
}
