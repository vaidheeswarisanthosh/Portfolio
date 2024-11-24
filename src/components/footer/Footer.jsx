import React from 'react'
import { FaGithub } from "react-icons/fa";
import {  BsMailbox2 } from 'react-icons/bs'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Vaidhee</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
       
        <a href="https://github.com/vaidheeswarisanthosh" target='blank'>
          <FaGithub />
        </a>
        <a href="https://mail.google.com/">
          <BsMailbox2 />
        </a>
      </div>

      <div className="footer-copyright">
        <small>&copy; All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer;