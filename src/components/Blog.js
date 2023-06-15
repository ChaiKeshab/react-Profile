import React from 'react'
import catCry from '../Images/catCry.gif'
import './Empty.scss'

export default function Blog() {
    return (
        <div className='container-empty'>
            <h2>Blog...</h2>
            <img src={catCry} alt="Empty..." />
        </div>
    )
}
