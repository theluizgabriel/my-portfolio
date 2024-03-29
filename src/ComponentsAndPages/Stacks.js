import React from 'react'
import { stacks } from '../utils/stacks'

export default function Stacks() {
  return (
    <div className='flex sm:flex-col lg:flex-row items-center lg:justify-evenly mt-14'>
        <div>
            <h1 className='text-3xl font-semibold aHeader2 mb-20'>stacks</h1>
        </div>
          <div className='grid grid-rows-4 grid-flow-col lg:grid-flow-row lg:grid-cols-4 lg:gap-4 gap-8'>
                  {stacks.map((s)=> (
                      <div className='flex flex-col items-center lg:mr-4 grayscale hover:grayscale-0 hover:duration-300'>
                          <img src={s.url} alt={s.title} width='100px' height='100px' />
                          <p className='mt-2 font-light'>{s.title}</p>
                      </div>
                  ))}
          </div>
    </div>
  )
};