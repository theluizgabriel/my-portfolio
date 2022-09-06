import React from 'react'

function WorkCard() {
  return (
    <div className='flex w-1/2 justify-evenly'>
    <div 
    className='flex flex-col w-1/4 h-1/4 bg-[#C576FA] pr-12 pl-12 items-center
    p-10 text-center text-[#3C2416] rounded-xl hover:scale-105 duration-300 hover:duration-300'
    >
      <h1 className='mt-4 mb-4 text-2xl font-semibold'>Trivia Coffee</h1>
      <img
      className=''
      src="https://static.vecteezy.com/system/resources/previews/001/209/481/non_2x/coffee-png.png" 
      alt="cafex"
      />
        <span className='mt-4 mb-2'>Design and logical desenvolviment</span>
        <span className='italic'>(group project)</span>
        <a 
        href='http://trivia-coffee.vercel.app'
        className='bg-white p-2 pr-4 pl-4 mt-6 text-black rounded-xl hover:bg-black hover:text-white hover:duration-150'
        >
          View project
        </a>
    </div>
        <div 
        className='flex flex-col w-1/4 h-1/4 bg-[#C576FA] pr-12 pl-12 items-center
        p-10 text-center text-[#3C2416] rounded-xl hover:scale-105 duration-300 hover:duration-300'
        >
          <h1 className='mt-4 mb-4 text-2xl font-semibold'>Trivia Coffee</h1>
          <img
          className=''
          src="https://static.vecteezy.com/system/resources/previews/001/209/481/non_2x/coffee-png.png" 
          alt="cafex"
          />
            <span className='mt-4 mb-2'>Design and logical desenvolviment</span>
            <span className='italic'>(group project)</span>
            <a 
            href='http://trivia-coffee.vercel.app'
            className='bg-white p-2 pr-4 pl-4 mt-6 text-black rounded-xl hover:bg-black hover:text-white hover:duration-150'
            >
              View project
            </a>
        </div>
      </div>
  )
}

export default WorkCard