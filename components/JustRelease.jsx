'use client'
import { TiStarFullOutline } from "react-icons/ti";
import Link from 'next/link'

async function getJustRelease() {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTMxMzkxMjFiMjI4NDY3ZWViYTkwYjJjMGQ3ZjJlZSIsInN1YiI6IjY0ZDc5NzQ3ZjE0ZGFkMDBjNmY4YTY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._-ZYUqJa1yJwxYbenDhsg8Zy08RTFrzykMVeQcL2pao'
        }
      };

    const res = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",options)
    return res.json()
  }

 async function JustRelease() {
    const data = await getJustRelease()
    // // console.log(data)

  return (
    <div>
        <h1 className='text-4xl font-thin tracking-wide mt-4 lg:mt-8 ml-4 lg:ml-24'>Just Release</h1>
        <div className='flex gap-4 lg:justify-between lg:ml-24 mx-4 lg:mx-24 mt-4 -z-50'>
            {data?.results?.slice(0,5).map((item) => (
                <div key={item.id} className="relative cursor-pointer">
                    <Link href={`/movie/${item.id}`}>
                      <img src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} className='rounded-2xl hover:opacity-40 duration-500 hover:-z-50'/>
                    </Link> 
                    
                    <div className="absolute hover:z-50 -z-50 top-10 lg:top-24 lg:mx-4 items-center font-bold">
                        <h2 className="text-[8px] lg:text-[16px] text-center w-[92px] lg:w-[220px] ">{item.title}</h2> 
                        <div className="flex justify-center items-center">
                            <TiStarFullOutline className="text-yellow-400"/>
                            <h1 className='text-[14px] lg:text-base'>{item.vote_average}</h1>
                        </div> 
                        
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default JustRelease