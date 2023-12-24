import { TiStarFullOutline } from "react-icons/ti";
import Button from "./Button";
import Link from 'next/link'

async function getPopularSeries() {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTMxMzkxMjFiMjI4NDY3ZWViYTkwYjJjMGQ3ZjJlZSIsInN1YiI6IjY0ZDc5NzQ3ZjE0ZGFkMDBjNmY4YTY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._-ZYUqJa1yJwxYbenDhsg8Zy08RTFrzykMVeQcL2pao'
        }
      };
      const res = await fetch("https://api.themoviedb.org/3/tv/popular?page=1",options)
      return res.json()
}
async function PopularSeries() {
    const data = await getPopularSeries()
    console.log(data)
  return (
    <div>
        {/* <h1 className='text-4xl font-thin tracking-wide mt-4 lg:mt-8 ml-4 lg:ml-24'>Popular Series</h1> */}

        <div className="mt-10 lg:mt-24 mb-10 lg:mb-12">
            {data?.results?.splice(0,1).map((item) => (
                <div key={item.id}>
                    <div className="flex justify-between mx-4 lg:mx-24">
                        <div className="lg:ml-12 lg:mt-24">
                            <h1 className="lg:text-5xl">{item.name}</h1>
                            <div className="flex items-center lg:mt-2">
                                <TiStarFullOutline className="text-yellow-400"/>
                                <h1 className='text-[14px] lg:text-base'>{item.vote_average}</h1>
                            </div> 
                            <p className="w-[250px] lg:w-[650px] tracking-widest lg:text-2xl font-thin lg:mt-4 mb-4">{item.overview}</p>
                            <Button title="Play Now" />
                        </div>
                        <Link href={`/tv/${item.id}`}>
                            <img src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} className="rounded-2xl lg:h-[600px] w-[250px] lg:w-[450px] ml-10 lg:mr-10 hover:opacity-50 duration-500" />
                        </Link>
                    </div>
                </div>
            ))}
        </div>

        <h1 className='text-4xl font-thin tracking-wide mt-4 lg:mt-8 ml-4 lg:ml-24'>Popular TV Series</h1>
        
        <div className="flex gap-4 lg:justify-between lg:ml-24 mx-4 lg:mx-24 mt-4 lg:mb-12">
            {data?.results?.slice(0,5).map((item) => (
                <div key={item.id} className="relative">
                    <Link href={`/tv/${item.id}`}>
                        <img src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} className='rounded-2xl hover:opacity-40 duration-500 hover:-z-50'/> 
                    </Link>
                    
                    <div className="absolute hover:z-50 -z-50 top-10 lg:top-24 lg:mx-4 items-center font-bold">
                        <h2 className="text-[8px] lg:text-[16px] text-center w-[92px] lg:w-[220px] ">{item.name}</h2> 
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

export default PopularSeries