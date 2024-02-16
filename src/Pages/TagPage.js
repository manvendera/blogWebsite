import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import Header from '../component/Header';
import Blogs from '../component/Blogs';
import Fotter from '../component/Fotter';

export default function TagPage() {
    const navigation = useNavigate();
    const loaction = useLocation();
    const tag = loaction.pathname.split('/').at(-1)

  return (
    <div>
        <Header></Header>
        <div>
            <button 
            onClick={()=> navigation(-1)}> 
                back
            </button>
            <h2>
                Blogs Tagged <span>#{tag}</span>
            </h2>
        </div>
        <Blogs></Blogs>
        <Fotter></Fotter>
    </div>
  )
}
