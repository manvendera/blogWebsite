import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Fotter() {
  const {page,handlePageChange,  totalPages} = useContext(AppContext)
  return (
    <div className='flex h-[10vh] items-center justify-evenly'>
      <div className='flex gap-2'>
      { page > 1 &&
        <button className='border-2 rounded-md  text-black px-3 uppercase hover:bg-blue-500 hover:text-white' onClick={()=> handlePageChange(page-1)}>
          previous
        </button>
      }
      {
        page <   totalPages &&
        (
          <button className='border-2 rounded-md px-3 uppercase text-black hover:bg-blue-500 hover:text-white' onClick={()=>handlePageChange(page+1)}>Next</button>
        )
      }
      </div>
      
      <p>{page} pageof <span>{totalPages}</span></p>
    </div>
  )
}
