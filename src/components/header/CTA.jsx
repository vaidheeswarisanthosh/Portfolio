
import cv from '../../assets/Resume.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={cv} download className="btn" target='blank'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        
    </div>
  )
}

export default CTA