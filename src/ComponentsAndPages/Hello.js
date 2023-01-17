import React from 'react'

export default function Hello() {
  return (
    <div className='flex sm:flex-col lg:flex-row w-full lg:justify-evenly lg:mt-16 
    sm:p-12 lg:p-0 sm:items-center'>
      <span className='font-semibold lg:text-2xl text-xl mb-6 sm:flex lg:hidden'>
          Olá, meu nome é Luiz Gabriel
      </span>
      <div className='flex sm:mb-10 lg:mb-0'>
            <img src='https://i.imgur.com/bfeSgAs.png' alt='pc'
            className='transition-transform hover:-translate-y-4 hover:skew-x-3' />
      </div>
      <div className='flex flex-col'>
          <div className='flex sm:flex-col lg:flex-row items-center'>
            <div className='flex flex-col'>
              <span className='font-semibold text-2xl sm:hidden lg:flex'>
                Olá, meu nome é Luiz Gabriel
              </span>
              <span className='font-light lg:text-xl text-lg text-end sm:mb-4 lg:mb-0'>
                seja bem-vindo ao meu portfólio
              </span>
            </div>
            <span className="animate-[wave_3500ms_ease-in-out_2] lg:text-5xl text-4xl mb-2 ml-4">
                  👋🏿
            </span>
          </div>
      </div>
    </div>
  )
};