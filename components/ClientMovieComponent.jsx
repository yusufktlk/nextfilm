'use client'

import { useContext, useEffect, useState } from "react"
import { MainContext } from '@/contextx/myContext';
import MoviesFetch from "./MoviesFetch";

function ClientMovieComponent() {

 const {pageNum, setPageNum} = useContext(MainContext)
 console.log(pageNum)
 
  return (
    <>
    <div className='mt-32 mb-24'>
       <MoviesFetch pageNum={pageNum} setPageNum={setPageNum} />
   </div>
   </>
  )
}


export default ClientMovieComponent