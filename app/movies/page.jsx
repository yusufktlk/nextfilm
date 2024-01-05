'use client'
import React, { useState } from 'react'
import ClientMovieComponent from '@/components/ClientMovieComponent';
import { MainContext, useContext } from '@/contextx/myContext';


function Movies() {

const [pageNum, setPageNum] = useState(4)


  return (
    <MainContext.Provider value={{pageNum, setPageNum}}>
        <ClientMovieComponent />
    </MainContext.Provider>
  )
}

export default Movies