import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import Card from './Card'

export default function Blogs() {
    const { posts, loading } = useContext(AppContext)
    return (
        <div>
            {
                loading ? (<Spinner></Spinner>) : (
                    posts.length === 0 ? (
                        <div>
                            <p>No Post Found</p>
                        </div>
                    ) : (
                        posts.map((post) => {
                            return(
                            
                           <Card post={post}/>
                        )})
                    )
                )
            }
        </div>
    )
}
