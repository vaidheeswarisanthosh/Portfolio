
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/profile-4.jpeg';
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h4>Hello I'm</h4>
        <h3>Vaidheeswari Murugan</h3>
        <h1 className='text-light'>Full Stack Developer</h1>
        
        
        
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
            <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header