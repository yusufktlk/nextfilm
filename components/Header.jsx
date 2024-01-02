import React from 'react'
import Link from 'next/link'
import Searchbar from './Searchbar'

function Header() {
  return (
    <main className='absolute top-0 z-50  font-bold lg:tracking-wide text-[13px] lg:text-[17px]'>
      <div className='flex justify-between z-50   mt-2 md:mt-4  lg:mx-14 mx-3 '>
        <div>
            <Link href={"/"}><h1 className='lg:text-4xl z-50  text-red-800 tracking-widest font-extrabold cursor-pointer mt-2'>NextFilms</h1></Link>
        </div>

        <div className='flex gap-4 lg:gap-12 ml-[50px] lg:ml-[250px] text-[12px] lg:text-base mt-4'>
            <h1>Movies</h1>
            <h1>TV Series</h1>
            <h1>Genres</h1>
            <Link href={"/upcoming"}>Upcoming</Link>
        </div>

        <div className=''>
            <Searchbar />
        </div>
    </div>
    </main>
  )
}

export default Header

