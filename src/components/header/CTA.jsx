
import cv from '../../assets/my-resume.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={cv} download className="btn" >Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        
    </div>
  )
}

export default CTA;