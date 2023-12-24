import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <main className='absolute top-0 z-50  font-bold lg:tracking-wide text-[13px] lg:text-[17px]'>
      <div className='flex justify-between z-50 items-center mt-2 md:mt-4  lg:mx-14 mx-3 '>
        <div>
            <Link href={"/"}><h1 className='lg:text-4xl z-50  text-red-800 tracking-widest font-extrabold cursor-pointer'>NextFilms</h1></Link>
        </div>

        <div className='flex gap-4 lg:gap-12 ml-[50px] lg:ml-[250px] text-[12px] lg:text-base'>
            <h1>Movies</h1>
            <h1>TV Series</h1>
            <h1>Genres</h1>
            <h1>Upcoming</h1>
        </div>

        <div>
            <input className='bg-black rounded-xl w-32 lg:w-52 p-2 border-2 border-red-900 ml-[50px] lg:ml-[300px]' placeholder='Search' />
        </div>
    </div>
    </main>
  )
}

export default Header

