import React from 'react'
import catBored from '../Images/catBored.png'
import './Empty.scss'

export default function Projects() {
    return (
        <div className='container-empty'>
            <h2>Projects...</h2>
            <img className='empty' src={catBored} alt="Empty..." />
        </div>
    )
}
