import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './Navbar.scss'
// import logo from '../logo.svg';
// impt

// rfc (react-function-component)
export default function Navbar(props) {
  const [mode, setMode] = useState('Light Mode')
  const [theme, setTheme] = useState('darkMode')

  function toggleMode() {
    if (theme === 'darkMode') {
      setTheme('lightMode')
      setMode('Dark Mode')

    }
    if (theme === 'lightMode') {
      setTheme('darkMode')
      setMode('Light Mode')
    }
  }

  useEffect(() => {
    document.body.classList = theme
  }, [theme]);

  return (
    <div className="navbar">
      <div className="container-navbar">
        <div className="logo-container">

          <Link to="/" className="logo">
            {/* <img className='brand' src={logo} alt="logo" /> */}
            {props.title}<span>{props.spanTitle}</span>
          </Link>
        </div>

        <nav>
          <ul className='primary-nav'>
            <li><Link className='home' to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
          </ul>

          <button className='btn-mode' onClick={toggleMode}>{mode}</button>

          <ul className='secondary-nav'>
            <li><Link to="/Inputs">Sign Up</Link></li>
            {/* <li><a href="/">Profile</a></li> */}
          </ul>
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