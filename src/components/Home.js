import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <>
      <div className='container-home'>
        <h1>HI, I'M CHAI</h1>
        <p>Welcome to my web space!</p>
      </div>

      <section className='section-home'>
        <p>"In an ever-evolving world, we face new challenges and opportunities. 
          Technology shapes our lives, connecting us and pushing boundaries.
          Empathy and understanding bridge our differences, fostering connection.
          Education empowers us to adapt, question, and grow.
          We must be responsible stewards of our planet, embracing sustainability.
          Through art and community, we find inspiration, resilience, and hope."
        </p>
        <br />
        <cite>- By Someone with big brain</cite>
      </section>
    </>
  )
}
