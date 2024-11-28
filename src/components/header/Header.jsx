// import './Header.css';
// import CTA from './CTA';
// import ME from '../../assets/profile-2.jpeg';
// import HeaderSocials from './HeaderSocials';

// const Header = () => {
//   return (
//     <header>
//       <div className="container header__container">
//         {/* Social icons on the left */}
//         <HeaderSocials />

//         {/* Centered content */}
//         <div className="header__content">
//           <div className="me">
//             <img src={ME} alt="me" />
//           </div>
//           <h4>Hello, I'm </h4>
//           <h4>Vaidheeswari Murugan</h4>
//           <h1 className="text-light">Full Stack MERN Developer</h1>
//           <p>
//             Motivated Full Stack MERN Developer with skills in creating
//             user-friendly web applications, clean code, and modern design. Eager to learn, grow, and
//             contribute to impactful projects in a dynamic team. Proficient in front-end and back-end development
//             with a passion for problem-solving.
//           </p>
//           <CTA />
//         </div>

//         {/* Scroll-down link on the right */}
//         <a href="#contact" className="scroll__down">Scroll Down</a>
//       </div>
//     </header>
//   );
// };

// export default Header;


import './Header.css';
import CTA from './CTA';
import ME from '../../assets/profile-2.jpeg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        {/* Left Section - Social Media Icons */}
        <HeaderSocials />

        {/* Center Section - Profile and Content */}
        <div className="header__content">
          <div className="me">
            <img src={ME} alt="Profile" className="me__image" />
            <div className="circle-animation"></div>
          </div>

          <h4 className="intro">Hello, I'm</h4>
          <h2 className="name">Vaidheeswari Murugan</h2>
          <h3 className="title">Full Stack MERN Developer</h3>
          <p className="description">
          Motivated Full Stack MERN Developer with expertise in building user-friendly web applications, 
          writing clean code, and implementing modern design solutions. Eager to learn, grow, and
          contribute to impactful projects within a dynamic team. Proficient in both front-end and 
          back-end development with a strong passion for problem-solving. Ready to bring fresh ideas 
          and dedication to your organization.
          </p>
          <CTA />
        </div>

        {/* Right Section - Scroll Down */}
        <a href="#contact" className="scroll__down">
          Scroll Down
          <span className="scroll__icon"></span>
        </a>
      </div>
    </header>
  );
};

export default Header;
