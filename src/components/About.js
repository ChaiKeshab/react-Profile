import React from 'react'
import cry from '../Images/cry.png'
import './Empty.scss'

export default function About() {
    return (
        <div className='container-empty'>
            <h2>About...</h2>
            <img src={cry} alt="Empty..." />
        </div>
    )
}
