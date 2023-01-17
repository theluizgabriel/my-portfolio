import React from 'react'
import { slide as MenuHamburguer } from 'react-burger-menu'

function Header() {
  return (
    <header className='flex m-12 font-anek-telugu lg:items-baseline lg:justify-between 
    sm:items-center md:items-center' id='home'>
        <div className='sm:flex md:flex lg:hidden w-full items-center'>
            <MenuHamburguer>
                <a href='#about' className='text-black text-xl font-light mb-4'>sobre</a>
                <a href='#works' className='text-black text-xl font-light mb-4'>projetos</a>
                <a href='#contact' className='text-[#7822F9] text-xl font-light '>contato</a>
            </MenuHamburguer>
            {/* <a href='#home' className='flex font-light text-3xl w-full justify-center'>
                lg
            </a> */}
        </div>
        <div className='sm:hidden md:hidden lg:block flex w-1/4 justify-center text-center'>
            <a href='#about' className='aHeader w-1/3'>
                <span className='spHeader w-1/2 text-xl font-light'>sobre</span>
            </a>
            <a href='#works' className='aHeader w-1/3'>
                <span className='spHeader w-1/2 text-xl font-light'>projetos</span>
            </a>
        </div>
        <div className='sm:hidden md:hidden lg:flex w-1/3 justify-center'>
            <a href='#home' className='aHeader2'>
                <span
                className='font-bold text-3xl after:content-["lg"]
                hover:after:content-["LuizGabriel"]' />
            </a>
        </div>
        <div className='sm:hidden md:hidden lg:flex w-1/4 justify-center'>
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
