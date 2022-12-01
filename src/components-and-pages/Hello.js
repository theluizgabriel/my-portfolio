import React from 'react'

export default function Hello() {
  return (
    <div className='flex w-full justify-evenly mt-40'>
        <div className='flex flex-col'>
            <div className='flex'>
              <div className='flex flex-col'>
                <span className='font-semibold text-2xl'>
                  Hi, i’m Luiz Gabriel
                </span>
                <span className='font-light text-2xl'>welcome to my portfolio</span>
              </div>
              <span class="hover:animate-[wave_3500ms_ease-in-out_2] text-5xl mb-2">
                  👋🏿
              </span>
            </div>
        </div>
        <div className='flex'>
            <img src='https://i.imgur.com/bfeSgAs.png' alt='pc'
            className='transition-transform hover:-translate-y-4 hover:skew-x-3 hover:transition-1000' />
        </div>
    </div>
  )
};