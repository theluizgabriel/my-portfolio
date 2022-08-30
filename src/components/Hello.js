import React from 'react'

function Hello() {
  return (
    <div className='flex w-full justify-evenly mt-40'>
        <div className='flex flex-col'>
            <span className='font-semibold text-2xl ml-6'>Hi, i’m Luiz Gabriel  👋</span>
            <span className='font-light text-2xl'>welcome to my portfolio</span>
        </div>
        <div className='flex'>
            <img src='https://i.imgur.com/bfeSgAs.png' alt='pc' />
        </div>
    </div>
  )
}

export default Hello