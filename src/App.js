import { useContext, useEffect } from 'react';
import './App.css';
import Blogs from './component/Blogs';
import Fotter from './component/Fotter';
import Header from './component/Header';
import { AppContext } from './context/AppContext';
function App() {
  const {fetchBlogPosts} = useContext(AppContext)
  useEffect(()=>{
    fetchBlogPosts()
  },[])
  return (
    <div className="App">
    <Header></Header>
    <Blogs></Blogs>
    <Fotter></Fotter>

    </div>
  );
}

export default App;
