'use client'
import { useEffect, useState } from "react";
import Link from 'next/link'

function Searchbar() {
   const [inputValue,setInputValue] = useState("")
   const [data,setData] = useState()

    async function getSearch() {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTMxMzkxMjFiMjI4NDY3ZWViYTkwYjJjMGQ3ZjJlZSIsInN1YiI6IjY0ZDc5NzQ3ZjE0ZGFkMDBjNmY4YTY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._-ZYUqJa1yJwxYbenDhsg8Zy08RTFrzykMVeQcL2pao'
        }
      };
      const res = await fetch(`https://api.themoviedb.org/3/search/multi?query=${inputValue}&include_adult=false&language=en-US&page=1`, options)
      return res.json()
    }
    
    useEffect(() => {
     getData()
    }, [inputValue])

    async function getData() {
      const data1 = await getSearch()
      setData(data1)
    }
    
  return (
        <div className=" ml-[50px] lg:ml-[200px] items-center">
          <input 
            className='bg-black outline-none rounded-md w-32 lg:w-[300px] p-2 border-b-2 border-b-red-900' 
            placeholder='Search' 
            onChange={(e) => setInputValue(e.target.value)}
            />
          <div onClick={() => setInputValue("")} className="flex flex-col gap-y-3 overflow-hidden overflow-y-auto w-[300px] h-[300px] text-right mt-2">
            {data?.results?.slice(0,10).map((item) => (
              <Link href={(item.media_type == "tv") ? `/tv/${item.id}` : `/movie/${item.id}`} key={item.id} className="flex gap-2 h-[300px] items-center hover:bg-slate-800 duration-300">
                <img src={"https://image.tmdb.org/t/p/original/" + item?.poster_path} width={90} height={900} className='w-[60px]' />
                <div>
                  <h1 className="text-sm font-thin mt-1 items-center w-[200px] text-center">{item?.name || item?.title}</h1>
                </div>
              </Link>
            ))}
          </div>
        </div>
  )
}

export default Searchbar