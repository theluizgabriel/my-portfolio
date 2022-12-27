import React from 'react'
import CarouselComponent from './CarouselComponent'

function Works() {
  return (
    <div className='flex w-[80%] mt-14 items-center' id='works'>
      <div className='flex w-1/2 justify-center'>
        <h1 className='text-3xl font-semibold aHeader2'>projetos</h1>
      </div>
        <CarouselComponent />
    </div>

  )
}

export default Works