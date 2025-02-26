
import './Portfolio.css'
// import IMG1 from '../../assets/income-expense-calculator.jpg'

import IMG3 from '../../assets/Ecommerce-Website.png'
import IMG4 from '../../assets/time-tracking-apps.png'
// import IMG5 from '../../assets/movie-search-app.png'
import IMG6 from '../../assets/landify-webpage.jpg'
import IMG7 from '../../assets/Pet-adoption-website.png';
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>

      
       {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={IMG5} alt='todo app'/>
          </div>
          <h3>Movie Searching App</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/vaidheeswarisanthosh/Movie-Searching-App" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://movies-searching-apps.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article> */}


        <article className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={IMG4} alt='todo app'/>
          </div>
          <h3 className='text-2xl font-bold text-gray-800 mb-4'>Clockify App</h3>
          <p>Technologies Used:React.js, Tailwind CSS, JavaScript, Express.js, Node.js, Chart.js, MongoDB</p>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/vaidheeswarisanthosh/Clockify-App" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://clockify-app.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>


    


     

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={IMG7} alt='todo app' />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Pet Adoption Website</h3>
          {/* <p>Technologies Used:Tailwind CSS, React.Js,Node.js,Express.Js,MongoDB</p> */}
          <p className="text-gray-600 text-sm">
          <span className="font-semibold">Technologies Used:</span> Tailwind CSS, React.js, Node.js, Express.js, MongoDB
        </p>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/vaidheeswarisanthosh/Pet-Adoption-Project" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://pet-adoption-platform-app.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>


                
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={IMG3} alt='todo app'/>
          </div>
          <h3>ECommerce Website</h3>
          <p>Technologies Used:Tailwind CSS,React,Node.Js,Express.js,MongoDB</p>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/vaidheeswarisanthosh/Ecommerce-LandingPage" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://unrivaled-frangollo-fc5493.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>


         
       <article className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={IMG6} alt='todo app'/>
          </div>
          <h3>Landify Webpage</h3>
          <p>Technologies Used: Tailwind CSS, HTML5 (This is a recreated version of the <a href="https://landify.framer.website/landing-two" target="_blank" rel="noreferrer">Landify Webpage</a> for learning purposes.)</p>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/vaidheeswarisanthosh/Landify-LandingPage" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://lambent-arithmetic-3e2ca2.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>


        
        {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={IMG3} alt='todo app'/>
          </div>
          <h3>ECommerce Website</h3>
          <p>Technologies Used:Tailwind CSS,HTML5,JavaScript,React,Node.Js,Express.Js,MongoDB</p>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/vaidheeswarisanthosh/Ecommerce-LandingPage" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://unrivaled-frangollo-fc5493.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article> */}

      </div>
    </section>
  )
}

export default Portfolio