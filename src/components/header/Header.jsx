import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/eu.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, eu sou</h5>
        <h1>Kaike Rocha</h1>
        <h5 className="text-light">Desenvolvedor Full Stack</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="eu" />
        </div>

        <a href="#contact" className='scroll__down'>Role para Baixo</a>
      </div>
    </header>
  )
}

export default Header