import Button from '@/components/Button';
import JustRelease from '@/components/JustRelease';
import PopularSeries from '@/components/PopularSeries';
import Trending from '@/components/Trending';
import Image from 'next/image'

async function getData() {
  const res = await fetch("https://api.themoviedb.org/3/movie/140607?api_key=413139121b228467eeba90b2c0d7f2ee")
  return res.json()
}

export default async function Home() {
  const data = await getData()
  // console.log(data)
  return(
    <main className='relative'>
      <div>
        <div className='bg-gradient-to-b from-transparent to-black lg:h-screen'>
          <img src={"https://image.tmdb.org/t/p/original/" + data.backdrop_path} width={90} height={900} className='lg:relative top-0 w-screen h-[350px] lg:h-screen opacity-80 bg-cover -z-50' />
        </div>
        
        <div className='lg:absolute top-[400px] left-[100px] z-50 text-center'>
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
      </div>

      <JustRelease />
      <Trending />
      <PopularSeries />
    </main>
  );
};