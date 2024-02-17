import React from 'react'

function Header() {
  return (
    <div id='main'>
        <div className='name'>
            <h2>INTENSIFICA TU</h2>
            <h1> <span>ENTRENAMIENTO</span>CON NOSOTROS </h1>
            <p className='details'>Construye tu cuerpo con profesionales</p>
            <div className='header-btns'>
                <a href='contact' className='header-btn'>
                    Comenzar
                </a>
            </div>
        </div>
    </div>
  )
}

export default Header