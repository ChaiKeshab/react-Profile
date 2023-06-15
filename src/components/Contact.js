import React from 'react'
import catBored from '../Images/catBored.png'
import './Empty.scss'

export default function Contact() {
    return (
        <div className='container-empty'>
            <h2>Contact...</h2>
            <img src={catBored} alt="Empty..." />
        </div>
    )
}
