import React from 'react'
import './Contact.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0lvwyet', 'template_ubesrow', form.current, 'GnUV5jv3rjoGs6RLz')
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
    })
    .catch((error) => {
      console.error(error.text);
      alert('Failed to send message.');
    });
    e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
          <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>vaidheeswarivm@gmail.com</h5>
            <a href="mailto:vaidheeswarivm@gmail.com" target='_blank' rel='noreferrer'>Send a message</a>
          </article>

          <article className='contact__option'>
          <FaLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Vaidheeswari</h5>
            <a href="mailto:https://www.linkedin.com/in/vaidheeswari-v-m-a3613b315" target='_blank' rel="noreferrer">My Profile</a>
          </article>

          
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>


        </form>

      </div>
    </section>
  )
}

export default Contact