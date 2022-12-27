import React from 'react'

function Header() {
  return (
    <header className='flex p-12 font-anek-telugu
    items-baseline justify-between' id='home'>
        <div className='flex w-1/4 justify-center text-center'>
            <a href='#about' className='aHeader w-1/3'>
                <span className='spHeader w-1/2 text-xl font-light'>sobre</span>
            </a>
            <a href='#works' className='aHeader w-1/3'>
                <span className='spHeader w-1/2 text-xl font-light'>projetos</span>
            </a>
        </div>
        <div className='flex w-1/3 justify-center'>
        <a href='#home' className='aHeader2'>
            <span
            className='font-bold text-3xl after:content-["lg"]
            hover:after:content-["LuizGabriel"]'>
            </span>
        </a>
        </div>
        <div className='flex w-1/4 justify-center'>
            <a
                className='gradient-border w-1/3 text-center'
                href='#contact'
            >
                <span 
                className='hover:ease-out hover:delay-100 text-xl font-light'
                >
                contato
                </span>
            </a>
        </div>
    </header>
  )
}

export default Header;
