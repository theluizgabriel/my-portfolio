import React from 'react'
import 'animate.css';

function AboutMe() {
  return (
    <main className='w-full bg-[#C576FA] mt-10 mb-10 p-20'>
        <div className='flex flex-col w-1/3 mb-8'>
            <div className='flex justify-center'>
                <h1
                className='text-3xl font-semibold text-white'
                >
                    {`about.me = {`}
                </h1>
            </div>
        </div>
        <div className='flex justify-center'>
            <div className='flex flex-col w-7/12 text-xl'>
                <span 
                className='mb-2 bg-white rounded-xl p-2'
                >
                    front-end developer,
                </span>
                <span className='mb-2 bg-white rounded-xl p-2'>22 years old,</span>
                <span className='mb-2 bg-white rounded-xl p-2'>brazillian,</span>
                <span className='mb-2 bg-white rounded-xl p-2'>carioca,</span>
                <span className='mb-2 bg-white rounded-xl p-2'>{`&& future full-stack developer`}</span>
            </div>
        </div>
            <div className='flex flex-col w-3/12 mt-8'>
            <div className='flex justify-center'>
                <h1
                className='text-3xl font-semibold text-white'
                >
                    {`}`}
                </h1>
                </div>
            </div>
    </main>
  )
}

export default AboutMe