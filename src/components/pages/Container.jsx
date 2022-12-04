// es el que va a contener toda la pagina

import React from 'react'
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import { Outlet, Link } from 'react-router-dom'
import Sidemenu from '../shared/Sidemenu';

function Container() {
    return (
        <div className='page-container'>
            <Header />
                <Outlet/>
            <Footer />

        </div>
    )
}

export default Container