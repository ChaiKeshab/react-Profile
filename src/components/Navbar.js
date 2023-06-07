import React from 'react'
import logo from '../logo.svg'
import '../App.scss';
import PropTypes from 'prop-types' 
// impt

// rfc (react-function-component)
export default function Navbar(props) {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo-container">

          <a href="/" className="logo">
            <img className='brand' src={logo} alt="logo" />
            {props.title}<span>{props.spanTitle}</span>
          </a>
        </div>

        <nav>
          <ul className='primary-nav'>
            <li><a className='home' href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Blog</a></li>
          </ul>

          <ul className='secondary-nav'>
            <li><a href="/">Notification</a></li>
            <li><a href="/">Profile</a></li>
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