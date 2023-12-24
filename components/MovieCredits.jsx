import React from 'react'

async function MovieCredits(params) {

    const id = params.id

    async function getCredits() {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTMxMzkxMjFiMjI4NDY3ZWViYTkwYjJjMGQ3ZjJlZSIsInN1YiI6IjY0ZDc5NzQ3ZjE0ZGFkMDBjNmY4YTY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._-ZYUqJa1yJwxYbenDhsg8Zy08RTFrzykMVeQcL2pao'
            }
          };
          const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options)
          return res.json()
    }

    const credits = await getCredits()
    
  return (
    <div className="flex items-center justify-between mx-24 mt-8 text-sm tracking-wider">
      {credits.cast.slice(0, 4).map((castMember, index) => (
        <div key={index} className="flex items-center gap-2">
          <img
            src={`https://image.tmdb.org/t/p/original/${castMember.profile_path}`}
            className="w-16 h-20 rounded-full"
          />
          <div>
            <h1 className="mb-2 font-bold">{castMember.name}</h1>
            <h3 className="font-thin">{castMember.character}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MovieCredits