import React from 'react'
import { stacks } from '../utils/stacks'

export default function Stacks() {
  return (
    <div className='flex w-full items-center justify-evenly mt-14'>
        <div>
            <h1 className='text-3xl font-semibold aHeader2'>stacks</h1>
        </div>
          <div className='grid grid-cols-4 gap-4'>
                  {stacks.map((s)=> (
                      <div className='flex flex-col items-center mr-4 grayscale hover:grayscale-0 hover:duration-300'>
                          <img src={s.url} alt={s.title} width='100px' height='100px' />
                          <p className='mt-2 font-light'>{s.title}</p>
                      </div>
                  ))}
          </div>
    </div>
  )
};