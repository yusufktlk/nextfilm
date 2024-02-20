import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className='text-sm font-thin text-center mt-4'>
        <hr className='opacity-30 mb-2s' />
        <div className="flex justify-center items-center gap-1">
          <h1>Made by <span className='underline'>Yusuf Kıtlık</span></h1>
          <a href="https://github.com/yusufktlk" target="_blank"><FaGithub className="cursor-pointer" /></a>
        </div>
    </div>
  )
}

export default Footer