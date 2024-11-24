import React from 'react'
import './Skills.css'

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { TbBrandNodejs } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
const Skills = () => {
  return (
   
      <section id='skills'>
          <h5>The Skills I have</h5>
                <h2>My Proficiencies</h2>
          <div className='container skills__container'>
              <div className='skills__frontend'>
                  
                  <h3>Frontend Development</h3>
                    <div className='skills__content'>
                        <article className='skills__details'>
                            <FaHtml5 className='skills__details-icons' />
                            <h4>HTML</h4>
                         </article>
                        <article className='skills__details'>
                            <FaCss3Alt className='skills__details-icons' />
                            <h4>CSS</h4>
                        </article>
                        <article className='skills__details'>
                            <SiJavascript className='skills__details-icons' />
                            <h4>Javascript</h4>
                        </article>
                        <article className='skills__details'>
                            <RiTailwindCssFill className='skills__details-icons' />
                            <h4>Tailwind</h4>
                        </article>
                        <article className='skills__details'>
                            <FaReact  className='skills__details-icons' />
                            <h4>React</h4>
                        </article>
                    </div>
              </div>

                <div className='skills__frontend'>
                  
                  <h3>Backend Development</h3>
                    <div className='skills__content'>
                        <article className='skills__details'>
                            <TbBrandNodejs className='skills__details-icons' />
                            <h4>Node JS</h4>
                         </article>
                        <article className='skills__details'>
                            <DiMongodb className='skills__details-icons' />
                            <h4>Mongo DB</h4>
                        </article>
                        <article className='skills__details'>
                            <SiExpress className='skills__details-icons' />
                            <h4>Express</h4>
                        </article>
                        <article className='skills__details'>
                            <TbBrandMysql className='skills__details-icons' />
                            <h4>MYSQL</h4>
                        </article>
                        
                    </div>
                </div>
            </div>
             
    </section>
  
  )
}

export default Skills;