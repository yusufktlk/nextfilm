import React from 'react'

async function UpcomingPage() {

    async function getUpcoming() {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTMxMzkxMjFiMjI4NDY3ZWViYTkwYjJjMGQ3ZjJlZSIsInN1YiI6IjY0ZDc5NzQ3ZjE0ZGFkMDBjNmY4YTY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._-ZYUqJa1yJwxYbenDhsg8Zy08RTFrzykMVeQcL2pao'
            }
          };
          const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`, options)
          return res.json()
    }
    const data = await getUpcoming()
    console.log(data)
  return (
    <div className='mx-24 mt-32'>
        <h1 className='text-4xl font-thin tracking-wide'>Upcoming Movies</h1>
        <div className='grid grid-cols-4 gap-y-6 items-center mt-12'>
            {data?.results?.filter((item) => item.poster_path).map((item) => (
                <div className='relative '>
                    <img src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`} className='w-[250px] h-[400px] rounded-md hover:opacity-40 hover:-z-50 duration-500' />
                    <div className=''>
                        <h1 className='absolute top-20 left-6 text-lg font-bold -z-50 hover:z-50 text-center w-[200px]'>{item.title}</h1>
                        <h1 className='absolute top-36 left-20 -z-50 hover:z-50 text-center font-bold'>{item.release_date}</h1>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default UpcomingPage