import Button from '@/components/Button';
import MovieCredits from '@/components/MovieCredits';
import MovieRecommendations from '@/components/MovieRecommendations';
import MovieSimilar from '@/components/MovieSimilar';
import React from 'react'

async function MoviePage({params}) {
    
    const id = params.id
    console.log(id)
    async function getMovieDetails() {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTMxMzkxMjFiMjI4NDY3ZWViYTkwYjJjMGQ3ZjJlZSIsInN1YiI6IjY0ZDc5NzQ3ZjE0ZGFkMDBjNmY4YTY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._-ZYUqJa1yJwxYbenDhsg8Zy08RTFrzykMVeQcL2pao'
            }
          };
          const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
          return res.json()
    }

    // async function getCredits() {
    //     console.log(id)
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //           accept: 'application/json',
    //           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTMxMzkxMjFiMjI4NDY3ZWViYTkwYjJjMGQ3ZjJlZSIsInN1YiI6IjY0ZDc5NzQ3ZjE0ZGFkMDBjNmY4YTY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._-ZYUqJa1yJwxYbenDhsg8Zy08RTFrzykMVeQcL2pao'
    //         }
    //       };
    //       const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options)
    //       return res.json()
    // }

    const data = await getMovieDetails()
    // const credits = await getCredits()
    // console.log(credits.cast)
    
  return (
    <div className='relative'>
        <div className='bg-gradient-to-b from-transparent to-black lg:h-screen'>
            <img src={"https://image.tmdb.org/t/p/original/" + data.backdrop_path} width={90} height={900} className='lg:relative top-0 w-screen h-[350px] lg:h-screen opacity-40 bg-cover -z-50' />
        </div>
        
        <div className='lg:absolute top-[400px] left-[100px] z-50 text-center max-w-[520px]'>
          <h1 className='text-4xl font-bold'>{data.title}</h1>
          <div className='flex gap-x-2 text-[14px] mt-2 font-thin justify-center'>
            <h5>{data.runtime}min</h5>-
            <h3>{data.release_date.slice(0,4)}</h3>-
            <h5>{data.genres[0].name}</h5>
          </div>
          <p className='text-sm lg:w-[510px] tracking-widest mt-2 mb-4 lg:mb-0'>{data.overview}</p>
          <div className='ml-[180px] mt-4'>
            <Button title="Play Now"/>
          </div>
        </div>
        
        <div>
            <h1 className='text-4xl font-thin tracking-wide mt-4 lg:mt-8 ml-4 lg:ml-24'>Top Cast</h1>
            <MovieCredits id={id} />
        </div>

        <div>
            <h1 className='text-4xl font-thin tracking-wide mt-4 lg:mt-8 ml-4 lg:ml-24'>Similar Movies</h1>
            <MovieSimilar id={id} />
        </div>

        <div>
            <h1 className='text-4xl font-thin tracking-wide mt-4 lg:mt-8 ml-4 lg:ml-24'>Recommendations</h1>
            <MovieRecommendations id={id} />
        </div>
    </div>
  )
}

export default MoviePage