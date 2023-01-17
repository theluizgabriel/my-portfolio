import React from 'react'

export default function Contact() {
  return (
    <div className='flex flex-col lg:flex-row justify-evenly mt-14 mb-14 px-12 items-center rounded-xl p-6' id='contact'>
        <h1 className='text-3xl font-semibold contact-text mb-8 lg:mb-0'>contato</h1>
      <div className='flex flex-col items-center justify-center bg-[#6b0afa] p-10 rounded-xl mb-10 lg:mb-0'>
        <div className='flex'>
          <a href='https://github.com/theluizgabriel'>
            <img src='https://imgur.com/mzlCfdN.png' width='80px' height='80px' alt='github icon' />
          </a>
          <a href='https://linkedin.com/in/theluizgabriel'>
            <img src='https://imgur.com/3dvZQ6F.png' width='80px' height='80px' alt='linkedin icon' />
          </a>
        </div>
        <div className='flex items-center'>
          <img src='https://imgur.com/IjmwcOZ.png' width='80px' height='80px' alt='email icon' />
          <p className='ml-4 text-white'>lgabrielpessoal@gmail.com</p>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <a href='https://drive.google.com/u/0/uc?id=1K7Kaq7WJLasWZwTGjBaxzL8oJ0gqoMY8&export=download'>
          <img src='https://imgur.com/GMdwOE9.png' alt='Download icon' width='100px' height='100px' />
        </a>
          <p className='mt-2 font-light'>Faça download do meu currículo!</p>
      </div>
    </div>
  )
};