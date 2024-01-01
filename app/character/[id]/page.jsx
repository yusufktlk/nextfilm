import React from 'react'

async function CharacterPage({params}) {
    const characterId = params.id
    console.log(characterId)

    async function getCharacterTV() {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTMxMzkxMjFiMjI4NDY3ZWViYTkwYjJjMGQ3ZjJlZSIsInN1YiI6IjY0ZDc5NzQ3ZjE0ZGFkMDBjNmY4YTY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._-ZYUqJa1yJwxYbenDhsg8Zy08RTFrzykMVeQcL2pao'
            }
          };
          const res = await fetch(`https://api.themoviedb.org/3/person/${characterId}/tv_credits?language=en-US`, options)
          return res.json()
    }
    async function getCharacterMovie() {
      const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTMxMzkxMjFiMjI4NDY3ZWViYTkwYjJjMGQ3ZjJlZSIsInN1YiI6IjY0ZDc5NzQ3ZjE0ZGFkMDBjNmY4YTY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._-ZYUqJa1yJwxYbenDhsg8Zy08RTFrzykMVeQcL2pao'
          }
        };
        const res = await fetch(`https://api.themoviedb.org/3/person/${characterId}/movie_credits?language=en-US`, options)
        return res.json()
  }

    async function getCharacterInfo() {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTMxMzkxMjFiMjI4NDY3ZWViYTkwYjJjMGQ3ZjJlZSIsInN1YiI6IjY0ZDc5NzQ3ZjE0ZGFkMDBjNmY4YTY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._-ZYUqJa1yJwxYbenDhsg8Zy08RTFrzykMVeQcL2pao'
            }
          };
          const res = await fetch(`https://api.themoviedb.org/3/person/${characterId}?language=en-US`, options)
          return res.json()
    }

    const charTV = await getCharacterTV()
    const charMovie = await getCharacterMovie()
    const charInfo = await getCharacterInfo()
    console.log(charInfo)
    

  return (
    <div className='flex flex-col'>
        <div className='flex justify-between mt-24 mx-24 gap-4 h-full mb-12 items-center'>
            <img src={`https://image.tmdb.org/t/p/original/${charInfo?.profile_path}`} className='w-[400px] h-[600px] rounded-md' />
            <div className='mx-12'>
              <h1 className='text-5xl font-serif'>{charInfo.name}</h1>
              <h3 className='font-light mt-2'><span className='font-semibold'>Birthday: </span> Born in {charInfo.birthday} in {charInfo.place_of_birth}</h3>
              <h3 className='font-light'><span className='font-semibold'>Deathday:</span> {(charInfo.deathday ? charInfo.deathday : "Alive")}</h3>
              <p className='text-lg tracking-widest font-thin mt-3'>{charInfo.biography}</p>
            </div>
        </div>

       <div className='flex mx-24  '>
        <div className='flex flex-row justify-between gap-x-4 '>
            <div>
              <h1 className='font-thin text-5xl mt-12'>TV Credits</h1>
                <div className='grid grid-cols-1 items-center gap-y-4 mt-6 w-[650px]'>
                  {charTV?.cast.filter((ch) => ch.poster_path).map((ch) => (
                      <div key={ch.id} className='flex text-[10px] gap-x-2'>
                          <img src={`https://image.tmdb.org/t/p/original/${ch?.poster_path}`} className='w-[100px] h-[150px] rounded-md' /> 
                          <div className='flex flex-col m-1 '>
                            <h1 className='text-xl font-serif'>{ch.original_name}</h1>
                            <h3 className='text-sm mt-1'>Character: <span className='font-bold'>{ch.character}</span></h3>
                            <p className='font-thin'>{ch.overview.slice(0,500)}...</p>
                          </div>
                          
                      </div>
                  ))}
                </div>
            </div>
                    <hr className='border-l-2 border-white border-opacity-30 h-full mt-32 mr-4' />
            <div>
              <div>
              <h1 className='font-thin text-5xl mt-12'>Movie Credits</h1>
                  <div className='grid grid-cols-1 items-center gap-y-4 mt-6 w-[650px]'>
                    {charMovie?.cast.filter((ch) => ch.poster_path).map((ch) => (
                        <div key={ch.id} className='flex text-[10px] gap-x-2'>
                          <img src={`https://image.tmdb.org/t/p/original/${ch?.poster_path}`} className='w-[100px] h-[150px] rounded-md' /> 
                            <div className='flex flex-col m-1'>
                              <h1 className='text-xl font-serif'>{ch.title}</h1>
                              <h3 className='text-sm mt-1'>Character: <span className='font-bold'>{ch.character}</span></h3>
                              <p className='font-thin tracking-wider mt-2'>{ch.overview.slice(0,500)}...</p>
                            </div>
                        </div>
                    ))}
                  </div>
              </div>
            </div>
          </div>
       </div>

    </div>
  )
}

export default CharacterPage