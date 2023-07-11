import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Que habilidades eu tenho</h5>
      <h2>Minha experiência</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Desenvolvedor Frontend</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light'>Experiente</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className='text-light'>Experiente</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>JavScript</h4>
              <small className='text-light'>Intermediário</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Bootstrap</h4>
              <small className='text-light'>Experiente</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Tailwind</h4>
              <small className='text-light'>Experiente</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>React</h4>
              <small className='text-light'>Intermediário</small>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Desenvolvedor Backend</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>NodeJS</h4>
              <small className='text-light'>Intermediário</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>MongoDB</h4>
              <small className='text-light'>Experiente</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>PHP</h4>
              <small className='text-light'>Básico</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>MySQL</h4>
              <small className='text-light'>Intermediário</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Python</h4>
              <small className='text-light'>Experiente</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience