import React from 'react'
import '../../App.css';
import { Link } from 'react-router-dom'


function Sidemenu() {
    return (
        
        <div className='sidemenu'>
            <ul className='ul-list-2'>
            <li>
                <Link to='contact' className='link-item'>Contacto</Link>
            </li>
            <li>
                <Link to='menu' className='link-item'>Menú</Link>
            </li>
            <li>
                <Link to='direccion' className='link-item'>Dirección</Link>
            </li>
        </ul>
    </div>
    )
}

export default Sidemenu