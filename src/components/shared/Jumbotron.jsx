import React from 'react'
import '../../App.css';
import imagenes from '../../imagenes'
import { Link } from 'react-router-dom'

function Jumbotron() {
    return (
        <div className='jumbotron'>
            <div>
                <img src={imagenes.portadajumbo} alt="" id='portadajumbo' />
            </div>
            <div id='text-container'>
                <span className='text-1'>Bienvenido a nuestro</span>
                <h1>Restaurante "Tacoste"</h1>
                <p className='text-2'>Somos una cadena de restaurantes en México, contamos con variedad de especialidades, entre ellas se destacan los tacos, y los antojitos mexicanos, para que disfrutes con tus seres queridos de una deliciosa comida.</p>

                <p>Ven a visitarnos a nuestras sucursales, nos encontramos en gran parte del territorio nacional, te esperamos para deleitarte con nuestro exquisito sazón.</p>

                <button className='btn-main'><Link to='contact' className='link-item'>Reserva ahora </Link></button>

                <Link to='menu' className='link-item2'>Conoce nuestro menu</Link>


            </div>



        </div>
    )
}

export default Jumbotron