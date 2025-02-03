
import './Portfolio.css'
import IMG1 from '../../assets/income-expense-calculator.jpg'

import IMG3 from '../../assets/Ecommerce-Website.png'
import IMG4 from '../../assets/time-tracking-apps.png'
import IMG5 from '../../assets/movie-search-app.png'
import IMG6 from '../../assets/landify-webpage.jpg'
import IMG7 from '../../assets/Pet-adoption-website.png';
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>

      <article className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={IMG6} alt='todo app'/>
          </div>
          <h3>Landify Webpage</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/vaidheeswarisanthosh/Landify-LandingPage" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://lambent-arithmetic-3e2ca2.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={IMG1} alt='todo app'/>
          </div>
          <h3>Income Expense Calculator</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/vaidheeswarisanthosh/Income-Expense-calculator" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://melodic-horse-bbb6ae.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>



        <article className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={IMG3} alt='todo app'/>
          </div>
          <h3>ECommerce Website</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/vaidheeswarisanthosh/Ecommerce-LandingPage" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://unrivaled-frangollo-fc5493.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={IMG5} alt='todo app'/>
          </div>
          <h3>Movie Searching App</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/vaidheeswarisanthosh/Movie-Searching-App" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://movies-searching-apps.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>


        <article className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={IMG4} alt='todo app'/>
          </div>
          <h3>Clockify App</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/vaidheeswarisanthosh/Clockify-App" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://clockify-app.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>


    


     

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={IMG7} alt='todo app' />
          </div>
          <h3>Pet Adoption Website</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/vaidheeswarisanthosh/Pet-Adoption-Project" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://pet-adoption-platform-app.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>


      </div>
    </section>
  )
}

export default Portfolio