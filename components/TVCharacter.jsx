import React from 'react'

async function TVCharacter(params) {

    const id = params.id
    console.log(id)

    async function getCharacter() {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTMxMzkxMjFiMjI4NDY3ZWViYTkwYjJjMGQ3ZjJlZSIsInN1YiI6IjY0ZDc5NzQ3ZjE0ZGFkMDBjNmY4YTY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._-ZYUqJa1yJwxYbenDhsg8Zy08RTFrzykMVeQcL2pao'
            }
          };
          const res = await fetch(`https://api.themoviedb.org/3/person/${id.credits.cast.id }/tv_credits?language=en-US`, options)
          return res.json()
    }

    const char = await getCharacter()
    console.log(char)

  return (
    <div>TVCharacter</div>
  )
}

export default TVCharacter