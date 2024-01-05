import React from 'react'

async function MoviesFetch({pageNum,setPageNum, hi}) {
    async function getMovies() {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTMxMzkxMjFiMjI4NDY3ZWViYTkwYjJjMGQ3ZjJlZSIsInN1YiI6IjY0ZDc5NzQ3ZjE0ZGFkMDBjNmY4YTY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._-ZYUqJa1yJwxYbenDhsg8Zy08RTFrzykMVeQcL2pao'
            }
          };
          const res =  await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNum}&sort_by=vote_count.desc`, options)
          return await res.json()
    }
    
    const data = await getMovies()
    
  return (
    <div>
        <div className='grid grid-cols-4 mx-24 gap-y-4'>
           {data?.results?.map((item) => (
               <div key={item.id} className='relative items-center '>
                   <img src={"https://image.tmdb.org/t/p/original/" + item.poster_path} width={90} height={900} className='relative w-[250px] h-[350px] hover:opacity-40 duration-500 z-50 hover:-z-50' />
                   <h1 className='absolute top-24 left-20 text-center max-w-[100px] -z-50 hover:z-50'>{item.title}</h1>
               </div>
           ))}
           
       </div>
    </div>
  )
}

export default MoviesFetch