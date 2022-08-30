import React from 'react'

function Header() {
  return (
    <header className='flex flex-row justify-around p-12 font-anek-telugu
    items-baseline'>
        <div>
            <a 
            href='#about' 
            className='mr-6 hover:before:content-["lg."]'
            >
                about
            </a>
            <a href='#works' className='ml-6 hover:before:content-["lg."]'>works</a>
        </div>
        <div>
        <a href='#home'>
            <span
            className='font-bold text-2xl after:content-["l.g"]
            hover:after:content-["luiz.gabriel"]'>
            </span>
        </a>
        </div>
        <div>
            <a
            href='#contact' 
            className='outline outline-offset-2 outline-2 
            outline-[#C576FA] pl-10 pr-10 pt-4 pb-4 rounded-lg
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