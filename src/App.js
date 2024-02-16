import { useContext, useEffect } from 'react';
import './App.css';
// import Blogs from './component/Blogs';
// import Fotter from './component/Fotter';
// import Header from './component/Header';
import Home from './Pages/Home';
import TagPage from './Pages/TagPage';
import BlogPage from './Pages/BlogPage';
import CategoryPage from './Pages/CategoryPage';

import { AppContext } from './context/AppContext';
import { Route } from 'react-router';
import { Routes } from 'react-router';
import { useLocation ,useSearchParams} from 'react-router-dom'
function App() {
  const {fetchBlogPosts} = useContext(AppContext)
  // useEffect(()=>{
  //   fetchBlogPosts()
  // },[])
 const [searchParams, setSearchParams] = useSearchParams();
 const  location = useLocation();
  useEffect(()=>{
   const page = searchParams.get('page') ?? 1;    
     if(location.pathname.includes('tags')){
      const tag = location.pathname.split('/').at(-1).replaceAll('-','');
      fetchBlogPosts(Number(page),tag)
     }
     else if(location.pathname.includes('categories')){
      const category = location.pathname.split('/').at(-1).replaceAll('-','');
      fetchBlogPosts(Number(page),null,category)
     }
     else{
      fetchBlogPosts(Number(page))
     }
  },[location.pathname,location.search])
  return (
    // <div className="App">
    // <H></H  eader>
    // <Blogs></Blogs>
    // <Fotter></Fotter>

    // </div>

    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/blog/:blogId' element={<BlogPage></BlogPage>}/>
      <Route path='/tags/:tag' element={<TagPage></TagPage>}/>
      <Route path='/categories/:category' element={<CategoryPage></CategoryPage>}/>

      
    </Routes>
  );
}

export default App;
