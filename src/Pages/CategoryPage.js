import React from 'react'
import Header from '../component/Header'
import { useLocation,useNavigate } from 'react-router';
import Blogs from '../component/Blogs';
import Fotter from '../component/Fotter';

export default function CategoryPage() {
  const navigation = useNavigate();
    const loaction = useLocation();
    const category = loaction.pathname.split('/').at(-1)
  return (
    <div>
      <Header></Header>
      <div>
      <button 
            onClick={()=> navigation(-1)}>
                back
            </button>
            <h2>
              Blogs on <span>{category}</span>
            </h2>
      </div>
      <Blogs></Blogs>
      <Fotter></Fotter>
    </div>
  )
}
