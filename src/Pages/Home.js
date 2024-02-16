import React from 'react'
import Header from '../component/Header'
import Blogs from '../component/Blogs'
import Fotter from '../component/Fotter'

export default function Home() {
  return (
    <div>
        <Header></Header>
        <div>
            <Blogs></Blogs>
            <Fotter></Fotter>
        </div>
    </div>
  )
}
