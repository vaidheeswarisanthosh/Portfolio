import React from 'react'
import './About.css'
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from '../../assets/me-about.jpg'

const About = () => {
  return (
   <section id="about">
    <h5>Get to Know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={ME} alt='About Image'/>
        </div>
      </div>
      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
          <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>2+ years working</small>

          </article>

          <article className='about__card'>
          <  VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>10+ completed</small>

          </article>

        </div>
        
        <p>I am a dedicated full-stack developer with two years of experience as a System Engineer at Infosys.
          I am passionate about designing and developing user-centered, efficient web applications. 
          Proficient in JavaScript, HTML, CSS, Tailwind, React, MongoDB, and Express.
        </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>

      </div>
    </div>

   </section>
  )
}

export default About;