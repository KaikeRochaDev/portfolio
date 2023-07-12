import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>KaikeRochaDev</a>

      <ul className='permalinks'>
        <li><a href="#">Início</a></li>
        <li><a href="#about">Sobre mim</a></li>
        <li><a href="#experience">Experiências</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#portfolio">Portfólio</a></li>
        <li><a href="#testimonials">Depoimentos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

      <div className="footer__socials">
        <a href=""><FaFacebook/></a>
        <a href="https://www.instagram.com/kaikerochadev/" target="_blank" rel="noreferrer"><FiInstagram/></a>
        <a href=""><IoLogoTwitter/></a>
      </div>

      <div className="footer__copy">
        <small>&copy; KaikeRochaDev. Todos os direitos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer