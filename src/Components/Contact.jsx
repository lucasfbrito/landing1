import React from 'react'

function Contact() {
  return (
    <div id='contact'>
        <h2>Contactanos</h2>
        <form>
            <input type='text' placeholder='Nombre y Apellido' />
            <input type='email' placeholder='Correo Electronico' />
            <textarea placeholder='Escribenos' name='message'></textarea>
            <input  type='submit' value='Enviar'/>
        </form>
    </div>
  )
}

export default Contact