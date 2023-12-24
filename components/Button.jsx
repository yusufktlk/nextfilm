import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";


function Button(props) {
  return (
    <button className='flex items-center justify-center gap-2 bg-red-900 w-36 h-12 rounded-xl hover:scale-110 duration-500'>
        <FaCirclePlay className='text-black' />
        <h1 className='text-black font-bold tracking-wider'>{props.title}</h1>
    </button>
  )
}

export default Button