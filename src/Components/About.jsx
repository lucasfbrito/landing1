import React from 'react'
import aboutimage from '../images/about.png'
function About() {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={aboutimage} alt='' />
        </div>
        <div className='about-text'>
            <h1>CONOCE MÁS SOBRE NOSOTROS</h1>
            <p> lorem Reprehenderit veniam veniam aute aliqua est 
            minim sit reprehenderit velit amet deserunt commodo 
            exercitation pariatur.</p>
            <button>SABER MAS</button>
        </div>
    </div>
  )
}

export default About