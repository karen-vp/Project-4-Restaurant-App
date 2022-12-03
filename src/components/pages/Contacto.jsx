import React from 'react'
import Portada from '../shared/Portada'
import Formulario from './Formulario'

function Form() {
  return (
    <div className='contact-container'>
      <Formulario/>
      <Portada/>
    </div>
  )
}

export default Form