import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './Navbar.css'
import menu from '../Images/menu.svg';
import exit from '../Images/exit.svg';
import moon from '../Images/moon.svg';
import sun from '../Images/sun.svg';
import resume from './Resume.pdf'
// impt

// rfc (react-function-component)
export default function Navbar(props) {
  //------------------------------------darkMode------------------------------------
  const [mode, setMode] = useState(true)
  const [theme, setTheme] = useState('darkMode')
  const [blur, setBlur] = useState('')

  const toggleMode = () => {
    if (theme === 'darkMode') {
      setTheme('lightMode')
      setMode(false)
    }
    else if (theme === 'lightMode') {
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

  const toggleHambar = () => {
    if (window.matchMedia('(max-width: 767px)').matches) {
      if (blur === '') {
        setHamBar(true)
        setBlur('blur')
      }
      else if (blur === 'blur') {
        setHamBar(false)
        setBlur('')
      }
    }
  }
  
  const closeMenu = () => {
    setHamBar(false);
    setBlur('')
  }

  return (
    <div className="navbar">
      <div className="container-navbar">
        <div className="logo-container">
          <Link to="/" className="logo"> CHAI <span>KESHAB</span></Link>
        </div>

        <img className={`mobile-menu ${hamBar ? 'hide' : 'show'}`} src={menu} alt="Open Navigation" onClick={() => toggleHambar()} />

        <nav>
          <img className={`mobile-menu-exit ${hamBar ? 'show' : 'hide'}`} src={exit} alt="Close Navigation" onClick={() => toggleHambar()} />

          <div className={`nav-div ${hamBar ? 'show' : 'hide'}`}>

            <ul className={`nav-one`}>
              <li><Link to="/About" onClick={() => closeMenu()} className={`${hamBar ? 'hide' : 'show'}`}>About</Link></li>
              <li><Link to="/Projects" onClick={() => closeMenu()} className={`${hamBar ? 'hide' : 'show'}`}>Projects</Link></li>

              <li><a className='resume' href={resume} target='_blank' rel='noreferrer'>Resume</a></li>
            </ul>
          </div >

          <div className='sun-moon'>
            <img className={`sun ${mode ? 'show' : 'hide'}`} onClick={() => toggleMode()} src={sun} alt="Dark Mode" />
            <img className={`moon ${mode ? 'hide' : 'show'}`} onClick={() => toggleMode()} src={moon} alt="Light Mode" />
          </div>
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