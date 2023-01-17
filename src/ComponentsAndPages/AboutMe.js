import React from 'react'
import 'animate.css';

function AboutMe() {
  return (
    <main className='w-full bg-[#7822f9] mt-10 mb-10 p-20' id='about'>
        <div className='flex flex-col lg:w-1/3 mb-8'>
            <div className='flex lg:justify-center'>
                <h1
                className='text-3xl font-semibold text-white'
                >
                    {`sobreMim = {`}
                </h1>
            </div>
        </div>
        <div className='flex justify-center'>
            <div className='flex flex-col lg:w-7/12 text-xl'>
                <p className='text-center sm:text-lg lg:text-xl font-light bg-white rounded-xl p-4'>
                    Sou nascido e criado no Rio de Janeiro, tenho 22 anos e sempre tive uma forte ligação com a tecnologia,
                    desde pequeno sempre busquei aprimorar meus conhecimentos apenas por curiosidade.
                    Hoje estudo Desenvolvimento Web Full Stack na Trybe, onde tenho a oportunidade de aprender com tudo que o curso 
                    me proporciona, tenho como foco não apenas o código mas também as Soft Skills e vejo que trabalhar em projetos
                    em grupo tem me ajudado muito, percebi que tenho um senso de urgência forte e empatia com toda a equipe
                    e busco sempre a responsabilidade através da liderança.
                    Meu foco hoje é conseguir trabalhar como um Desenvolvedor Fullstack, que tal me dar essa oportunidade? :D
                </p>
            </div>
        </div>
            <div className='flex flex-col lg:w-3/12 mt-8'>
            <div className='flex lg:justify-center'>
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