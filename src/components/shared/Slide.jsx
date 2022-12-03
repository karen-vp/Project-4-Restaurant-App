import React from 'react'
import imagenes from '../../imagenes'
import '../../App.css';
import Carousel from 'react-bootstrap/Carousel';


function Slide() {

    return (
        <div className='carousel-container'>

            <div className='promo-description'>
                <h3>Conoce nuestras promociones</h3>
                <span>Estos son algunas de nuestras promociones, disponibles todos los días, puedes consultar el menú para conocer más platillos</span>
            </div>

            <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imagenes.slide1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Tacos con queso</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imagenes.slide2}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Tacos al pastor</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imagenes.slide3}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Tacos de bistec</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

            </Carousel>
        </div>

    )
}

export default Slide