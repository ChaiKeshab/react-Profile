import React from 'react'
import profile from '../Images/cryCat-profile.webp'
import './About.scss'

export default function About() {
    return (
        <div className='container-about'>
            <h2>A LITTLE BIT ABOUT ME</h2>
            <img className='profile' src={profile} alt="Definitely me..." />
            <div>
                <p>Hey! My name is Keshab Chai and I'm a web developer with a passion for front end development and design.
                    I'm currently a fourth year student at idk-what College pursuing a degree in Computer science and Information technoloy. 
                    I aspire toward a career that will allow me to channel my creativity through crafting beautiful software and engaging experiences. 
                    <br />
                    <br />
                    When I'm not on the computer, I am on my phone...</p>
            </div>
        </div>
    )
}
