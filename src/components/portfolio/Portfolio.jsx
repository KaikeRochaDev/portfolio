import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meus Trabalhos Recentes</h5>
      <h2>Portfólio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Painel de criptomoedas e visualização financeira</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/kaikerochadev" target='_blank' className='btn'>GitHub</a>
            <a href="https://github.com/kaikerochadev" target="_blank" className='btn btn-primary'>Ver site</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Modelos de gráficos e infográficos no figma</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/kaikerochadev" target='_blank' className='btn'>GitHub</a>
            <a href="https://github.com/kaikerochadev" target="_blank" className='btn btn-primary'>Ver site</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Kit de interface do usuário do painel Figma para aplicativos da web de design de dados</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/kaikerochadev" target='_blank' className='btn'>GitHub</a>
            <a href="https://github.com/kaikerochadev" target="_blank" className='btn btn-primary'>Ver site</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Manutenção de tarefas e acompanhamento do progresso</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/kaikerochadev" target='_blank' className='btn'>GitHub</a>
            <a href="https://github.com/kaikerochadev" target="_blank" className='btn btn-primary'>Ver site</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Modelos de gráficos e infográficos no figma</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/kaikerochadev" target='_blank' className='btn'>GitHub</a>
            <a href="https://github.com/kaikerochadev" target="_blank" className='btn btn-primary'>Ver site</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Modelos de gráficos e infográficos no figma</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/kaikerochadev" target='_blank' className='btn'>GitHub</a>
            <a href="https://github.com/kaikerochadev" target="_blank" className='btn btn-primary'>Ver site</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio