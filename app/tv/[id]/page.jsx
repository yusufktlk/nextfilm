import Button from '@/components/Button';
import TVCredits from '@/components/TVCredits';
import TVSimilar from '@/components/TVSimilar';
import React from 'react'

async function TVPage({params}) {
    const id = params.id

    async function getTVDetails() {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTMxMzkxMjFiMjI4NDY3ZWViYTkwYjJjMGQ3ZjJlZSIsInN1YiI6IjY0ZDc5NzQ3ZjE0ZGFkMDBjNmY4YTY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._-ZYUqJa1yJwxYbenDhsg8Zy08RTFrzykMVeQcL2pao'
            }
          };
          const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, options)
          return res.json()
    }

    const data = await getTVDetails()

  return (
    <div className='relative'>
        <div className='bg-gradient-to-b from-transparent to-black lg:h-screen'>
            <img src={"https://image.tmdb.org/t/p/original/" + data.backdrop_path} width={90} height={900} className='lg:relative top-0 w-screen h-[350px] lg:h-screen opacity-40 bg-cover -z-50' />
        </div>
        
        <div className='lg:absolute top-[300px] left-[100px] z-50 text-center max-w-[520px]'>
          <h1 className='text-4xl font-bold'>{data.name}</h1>
          <div className='flex gap-x-2 text-[14px] mt-2 font-thin justify-center'>
            <h5>{data?.episode_run_time && data?.last_episode_to_air?.runtime}min per episode</h5>-
            <h5>{data.genres[0].name}</h5>
          </div>
            <h4 className='text-[15px] font-thin'>Total Episode: {data?.seasons[0].episode_count}</h4>
          <p className='text-sm lg:w-[510px] tracking-widest mt-2 mb-4 lg:mb-0'>{data.overview}</p>
          <div className='ml-[180px] mt-4'>
            <Button title="Play Now"/>
          </div>
        </div>
        
        <div>
            <h1 className='text-4xl font-thin tracking-wide mt-4 lg:mt-8 ml-4 lg:ml-24'>Top Cast</h1>
            <TVCredits id={id} />
        </div>

        <div className='mt-14'>
            <h1 className='text-4xl font-thin tracking-wide mt-4 lg:mt-8 ml-4 lg:ml-24'>Similar Series</h1>
            <TVSimilar id={id} />
        </div>
    </div>
  )
}

export default TVPage