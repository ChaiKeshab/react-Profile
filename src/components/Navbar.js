import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './Navbar.scss'
import menu from '../Images/menu.svg';
import exit from '../Images/exit.svg';
import moon from '../Images/moon.svg';
import sun from '../Images/sun.svg';
import resume from './Resume.pdf'
// impt

// rfc (react-function-component)
export default function Navbar(props) {
  //------------------------------------darkMode------------------------------------
  const [mode, setMode] = useState('false')
  const [theme, setTheme] = useState('darkMode')
  const [blur, setBlur] = useState('')

  function toggleMode() {
    if (theme === 'darkMode') {
      setTheme('lightMode')
      setMode(false)

    }
    if (theme === 'lightMode') {
      setTheme('darkMode')
      setMode(true)
    }
  }

  useEffect(() => {
    document.body.classList.toggle('blur', !!blur);
    document.body.classList.toggle('darkMode', theme === 'darkMode');
    document.body.classList.toggle('lightMode', theme === 'lightMode');
  }, [theme, blur]);

  //------------------------------------menuToggle------------------------------------
  const [hamBar, setHamBar] = useState(false)
  function toggleHambar() {

    if (window.matchMedia('(max-width: 767px)').matches) {
      if (blur === '') {
        setHamBar(true)
        setBlur('blur')
      }

      if (blur === 'blur') {
        setHamBar(false)
        setBlur('')
      }
    }
  }

  return (
    <div className="navbar">
      <div className="container-navbar">
        <div className="logo-container">

          <Link to="/" className="logo">
            {props.title}<span>{props.spanTitle}</span>
          </Link>
        </div>
        <img id="mobile-cta" className={`mobile-menu ${hamBar ? 'hide' : 'show'}`} src={menu} alt="Open Navigation" onClick={toggleHambar} />

        <nav>
          <img id="mobile-exit" className={`mobile-menu-exit ${hamBar ? 'show' : 'hide'}`} src={exit} alt="Close Navigation" onClick={toggleHambar} />

          <ul className={`primary-nav ${hamBar ? 'show' : 'hide'}`}>

            {/* <li><Link className='home' to="/">Home</Link></li> */}
            <li><Link to="/About" onClick={toggleHambar} className={`${hamBar ? 'hide' : 'show'}`}>About</Link></li>
            <li><Link to="/Projects" onClick={toggleHambar} className={`${hamBar ? 'hide' : 'show'}`}>Projects</Link></li>
            <li className='resume-list'><a className='resume' href={resume} target='_blank' rel='noreferrer'>Resume</a></li>
            {/* <li><button className='btn-mode' onClick={toggleMode}>{mode}</button></li> */}

            <li><img className={`sun ${mode ? 'show' : 'hide'}`} onClick={toggleMode} src={sun} alt="Dark Mode" /></li>
            <li><img className={`moon ${mode ? 'hide' : 'show'}`} onClick={toggleMode} src={moon} alt="Light Mode" /></li>
          </ul>


          {/* <ul className='secondary-nav'>
            <li><Link to="/Inputs">Sign Up</Link></li>
          </ul> */}
        </nav>
      </div>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  spanTitle: PropTypes.string
}

Navbar.defaultProps = {
  title: 'TitleName',
  spanTitle: 'SubName'
}