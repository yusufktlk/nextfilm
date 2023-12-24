import React from 'react'
import { TiStarFullOutline } from 'react-icons/ti';
import Link from 'next/link'


async function getTrendMovie() {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTMxMzkxMjFiMjI4NDY3ZWViYTkwYjJjMGQ3ZjJlZSIsInN1YiI6IjY0ZDc5NzQ3ZjE0ZGFkMDBjNmY4YTY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._-ZYUqJa1yJwxYbenDhsg8Zy08RTFrzykMVeQcL2pao'
        }
      };
      const res = await fetch("https://api.themoviedb.org/3/trending/movie/week?language=en-US",options)
      return res.json()
}

async function getTrendTV() {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTMxMzkxMjFiMjI4NDY3ZWViYTkwYjJjMGQ3ZjJlZSIsInN1YiI6IjY0ZDc5NzQ3ZjE0ZGFkMDBjNmY4YTY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._-ZYUqJa1yJwxYbenDhsg8Zy08RTFrzykMVeQcL2pao'
        }
      };
      const res = await fetch("https://api.themoviedb.org/3/trending/tv/day?language=en-US",options)
      return res.json()
}

async function Trending() {
    const movieData = await getTrendMovie()
    const tvData = await getTrendTV()

  return (
    <div>
        <h1 className='text-4xl font-thin tracking-wide mt-4 lg:mt-8 ml-4 lg:ml-24'>Trend of this week</h1> 
        
        <div className='flex justify-between mx-24 items-center mt-12'>
            {movieData?.results?.splice(0,4).map((item) => (
                <div key={item.id} className='flex gap-4 items-center'>
                    <Link href={`/movie/${item.id}`}>
                        <img src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} className='w-[250px] rounded-2xl hover:scale-105 duration-500 cursor-pointer' />
                    </Link>
                    <div className='w-full h-52'>
                        <h1 className='text-[15px] font-medium pt-6 w-40 h-28 tracking-wider'>{item.title}</h1>
                        <div className="flex items-center mb-1">
                            <TiStarFullOutline className="text-yellow-400"/>
                            <h1 className='text-[13px] lg:text-base'>{item.vote_average}</h1> 
                        </div> 
                        <span className='font-bold'> {item.media_type.toUpperCase()}</span>
                    </div>
                </div>
            ))}
        </div>

        <hr className='mt-12 opacity-25 mx-24 rounded-full'/>

        <div className='flex justify-between mx-24 items-center mt-12'>
            {tvData?.results?.splice(0,4).map((item) => (
                <div key={item.id} className='flex gap-4 items-center'>
                    <Link href={`/tv/${item.id}`}>
                        <img src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} className='w-[250px] rounded-2xl hover:scale-105 duration-500 cursor-pointer' />
                    </Link>
                    <div className='w-full h-52'>
                        <h1 className='text-[16px] font-medium pt-6 w-40 h-28 tracking-wider'>{item.name}</h1>
                        <div className="flex items-center mb-1">
                            <TiStarFullOutline className="text-yellow-400"/>
                            <h1 className='text-[13px] lg:text-base'>{item.vote_average}</h1> 
                        </div> 
                        <span className='font-bold'> {item.media_type.toUpperCase()}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Trending