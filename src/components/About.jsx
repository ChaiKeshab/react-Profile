import profile from '../Images/cryCat-profile.webp'
import './About.css'

export default function About() {
    return (
        <div className='container-about'>
            <h2>A LITTLE BIT ABOUT ME</h2>
            <img className='profile' src={profile} alt="Definitely me..." />
            <div>
                <p>Hey! My name is Keshab Chai and I&apos;m a web developer with a passion for front end development and design.
                    I&apos;m currently a fourth year student at idk-what College pursuing a degree in Computer science and Information technoloy.
                    I aspire toward a career that will allow me to channel my creativity through crafting beautiful software and engaging experiences.
                    <br />
                    <br />
                    When I&apos;m not on the computer, I am on my phone...</p>

            </div>
        </div>
    )
}
