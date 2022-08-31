import React from 'react'

function Header() {
  return (
    <header className='flex p-12 font-anek-telugu
    items-baseline justify-between'>
        <div className='flex w-1/4 justify-center text-center'>
            <a 
            href='#about' 
            className='hover:before:content-["lg."] w-1/2'
            >
                about
            </a>
            <a href='#works' className='hover:before:content-["lg."] w-1/2'>works</a>
        </div>
        <div className='flex w-1/3 justify-center'>
        <a href='#home'>
            <span
            className='font-bold text-3xl after:content-["l.g"]
            hover:after:content-["luiz.gabriel"]'>
            </span>
        </a>
        </div>
        <div className='flex w-1/4 justify-center'>
            <a
            href='#contact' 
            className='outline outline-offset-2 outline-2 
            outline-[#C576FA] pl-10 pr-10 pt-4 pb-4 rounded-lg w-1/3 text-center
            '
            >
                <span 
                className='hover:before:content-["lg."] hover:ease-out hover:delay-100'
                >
                contact
                </span>
            </a>
        </div>
    </header>
  )
}

export default Header;