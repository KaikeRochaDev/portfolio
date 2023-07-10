import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub, FaInstagram} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/kaikerochadev/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/kaikerochadev" target='_blank'><FaGithub/></a>
        <a href="https://www.instagram.com/kaikerochadev/" target='_blank'><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocials