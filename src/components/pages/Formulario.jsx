import React from 'react'
import '../../App.css';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import { db } from './../../config/firebase';
import { addDoc, collection } from 'firebase/firestore'

function Formulario() {

  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const contacto = collection(db, 'contacts')
      const respuesta = await addDoc(contacto, inputs);
      alert("Se ha registrado tu información correctamente")
      return respuesta
    } catch (e) {

      console.error('Hubo un error', e)
    }
  }

  return (
    <>
      <div className='info-container'>
        <h2>Reserva con nosotros</h2>
        <p>A través del siguiente formulario, y nos comunicaremos contigo para brindarte las fechas disponibles para realizar tu reserva.</p>

        <p>Centro, Ciudad de México, MX 9876</p>

        <form className='form-container' onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre</label>
          <input type="text" name="nameForm" id="" onChange={handleChange} />
          <label htmlFor="email">Email</label>
          <input type="email" name="emailForm" id="" onChange={handleChange} />
          <label htmlFor="number">Teléfono</label>
          <input type="number" name="numberForm" id="" onChange={handleChange} />
          <label htmlFor="message">Mensaje y comentarios</label>
          <textarea name="messageForm" rows="10" cols="40" placeholder="Escribe aquí tus comentarios" onChange={handleChange}></textarea>

          <input type="submit" value="Enviar" />



        </form>
      </div>
    </>
  )
}

export default Formulario