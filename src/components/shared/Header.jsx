import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css';
import imagenes from '../../imagenes';
import {useState} from 'react'
import Sidemenu from './Sidemenu';


function Header() {
  const [open, setOpen] = useState(false)
  return (
    <div>

      <header>
        <nav className='nav-menu'>
          <Link to='/'><img src={imagenes.logo} alt="logo" id='logo' /></Link>
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
                     
            <a href="#" className='menuicon-container' onClick={()=>setOpen(true)}>
            {open && <Sidemenu/>}{
              open === false ? (<img src="https://i.pinimg.com/originals/26/9d/d1/269dd16fa1f5ff51accd09e7e1602267.png" alt="menu-icon" className="menu-icon"/>) : null
            }
            
          </a>
                     
        </nav>
      </header>
    </div>
  )
}

export default Header