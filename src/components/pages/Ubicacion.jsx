import React from 'react'
import '../../App.css';

function Ubicacion() {
  return (
    <div className='address-container'>
      <h2>Ubicación</h2>
      <img src=""></img>
      <p>
      Dirección: Paseo de la Reforma 276 Col. Juarez, Mexico City Marriott Reforma Hotel, Ciudad de México 06600 México
      </p>
      <p>Telefono: +1 555 123-4567</p>
      <p>Email: contacto@tacoste.com</p>



      <iframe width="100%" height="600"  src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=52.70967533219885, -8.020019531250002&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"  frameBorder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </div>
  )
}

export default Ubicacion