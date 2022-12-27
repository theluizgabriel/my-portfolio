import { Paper } from '@mui/material';
import React from 'react';
import { Carousel } from 'react-carousel3';

export default function CarouselComponent() {
  const projects = [
    {
      name: "Trivia Coffee",
      description: "Aplicativo de trívia a partir de uma API já existente",
      description2: "(Front-end em grupo)",
      urlImage: "https://static.vecteezy.com/system/resources/previews/001/209/481/non_2x/coffee-png.png",
      buttons: {
        deploy: "https://trivia-coffee.vercel.app/",
        github: "https://github.com/theluizgabriel/trivia-coffee"
      }
    },
    {
      name: "TFC",
      description: "Uma API e um banco de dados p/ tabela de um campeonato de futebol.",
      description2: "(Back-end individual)",
      urlImage: "https://imgur.com/WX6eI3V.png",
      buttons: {
        github: "https://github.com/theluizgabriel/futebol-clube-api"
      }
    },
    {
      name: "Mais Trybê",
      description: "App de receitas de comidas e drinks",
      description2: "(Front-end em grupo)",
      urlImage: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp",
      buttons: {
        github: "https://github.com/theluizgabriel/mais-trybe-app",
        deploy: "http://mais-trybe-app.vercel.app/"
      }
    },
    {
      name: "Blogs API",
      description: "Uma API e um banco de dados para a produção de conteúdo para um blog.",
      description2: "(Back-end individual)",
      urlImage: "https://imgur.com/rSVuT0Z.png",
      buttons: {
        github: "https://github.com/theluizgabriel/project-blogs-api"
      }
    },
  ]

    return (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      background: '#FFFFFF',
    }}
  >
    <Carousel height={480} width={600} yOrigin={40} yRadius={30}>
    {projects.map((p) => (
      <Paper
      elevation={3}
      key={1}
      sx={{ backgroundColor: "#6b0afa", borderRadius: "20px" }}
    >
        <div className='flex flex-col items-center justify-center w-80 h-96'>
          <h1 className='text-2xl font-bold mb-4 text-white'>{p.name}</h1>
          <img
          className='max-w-[50%] max-h-[30%]'
          src={p.urlImage}
          alt={`Imagem ilustrativa para o projeto ${p.name}`}
          />
          <span className='text-white mt-4 mb-2 max-w-[86%] text-center'>{p.description}</span>
          {p.description2 ? <span className='text-white mb-2 font-thin'>{p.description2}</span> : <></>}
          <div className='flex mt-6'>
            {p.buttons.deploy ? 
            <a 
              href={p.buttons.deploy}
              className='mr-2 bg-white p-2 pr-4 pl-4 text-black rounded-xl hover:bg-black hover:text-white hover:duration-150'
            >
              Deploy
            </a> : <></> }
            {p.buttons.github ? 
            <a 
              href={p.buttons.github}
              className='ml-2 bg-white p-2 pr-4 pl-4 text-black rounded-xl hover:bg-black hover:text-white hover:duration-150'
            >
              Github
            </a> : <></> }
          </div>
        </div>
      </Paper>
    ))}
    </Carousel>
  </div>
);
}