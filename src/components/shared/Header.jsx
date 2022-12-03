import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css';
import imagenes from '../../imagenes';


function Header() {
  return (
    <div>

        <header>
            <nav className='nav-menu'>
            <Link to='/'><img src={imagenes.logo} alt="logo" id='logo'/></Link>
                <ul className='ul-list'>
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
            </nav>
        </header>
    </div>
  )
}

export default Header