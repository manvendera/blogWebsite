import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Card({ post }) {
    return (
        <div className='w-[60vw] h-auto mx-auto  flex items-center'>
            <div className=' mt-9' key={post.id}>
                <NavLink to={`/blog/${post.id}`}>
                    <span className='font-bold  text-3xl text-slate-800 '>{post.title}</span>
                </NavLink>

                <p className='text-2xl mt-2 font-bold '>
                    By <span>{post.aurthor}</span>
                    on {" "}
                    <NavLink to={`/categories/${post.category.replaceAll('', '-')}`}>
                        <span>{post.category}</span>
                    </NavLink>
                </p>
                <p className='text-xl  font-bold text-slate-400'>posted on <span> {post.date}</span></p>
                <p className='text-xl mt-3  font-sans'>{post.content}</p>
                <div>
                    {post.tags.map((tag,index) => {
                        return (
                            <NavLink key={index} to={`/tags/${tag.replaceAll('','-')}`}>
                                <span className='mt-4 inline-grid mx-2 cursor-pointer text-xl  hover:underline text-blue-600 font-bold' key={tag.index}>{`#${tag}`}</span>
                            </NavLink>


                        )
                    })}
                </div>
            </div>
        </div>

    )
}
