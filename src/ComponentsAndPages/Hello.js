import React from 'react'

export default function Hello() {
  return (
    <div className='flex w-full justify-evenly mt-40'>
        <div className='flex flex-col'>
            <div className='flex'>
              <div className='flex flex-col'>
                <span className='font-semibold text-2xl'>
                  Olá, meu nome é Luiz Gabriel
                </span>
                <span className='font-light text-xl text-end'>seja bem-vindo ao meu portfólio</span>
              </div>
              <span className="hover:animate-[wave_3500ms_ease-in-out_2] text-5xl mb-2 ml-4">
                  👋🏿
              </span>
            </div>
        </div>
        <div className='flex'>
            <img src='https://i.imgur.com/bfeSgAs.png' alt='pc'
            className='transition-transform hover:-translate-y-4 hover:skew-x-3' />
        </div>
    </div>
  )
};