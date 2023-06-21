import React from 'react'
import catBored from '../Images/catBored.png'
import './Empty.scss'

export default function Projects() {
    return (
        <div className='container-empty'>
            <h1>404</h1>
            <p>Page Not Found</p>
            <img className='empty' src={catBored} alt="Empty..." />
        </div>
    )
}
