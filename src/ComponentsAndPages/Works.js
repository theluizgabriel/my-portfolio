import React from 'react'
import CarouselComponent from './CarouselComponent'

function Works() {
  return (
    <div className='flex sm:flex-col lg:flex-row lg:w-[80%] mt-14 lg:items-center' id='works'>
      <div className='flex lg:w-1/2 justify-center'>
        <h1 className='text-3xl font-semibold aHeader2 sm:mb-4 lg:mb-0'>projetos</h1>
      </div>
        <div className='sm:w-[110%] lg:w-[100%]'>
          <CarouselComponent />
        </div>
    </div>

  )
}

export default Works