import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../App.css';
import { db } from './../../config/firebase';
import { collection, onSnapshot, query } from 'firebase/firestore'
import { useEffect, useState } from 'react';

function Menu() {
  const [menuSite, setMenuSite] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'itemsMenu'));
    onSnapshot(q, (querySnapshot) => {
      setMenuSite(
        querySnapshot.docs.map((item) => ({
          id: item.id,
          data: item.data(),
        })))
    });
  }, []);


  return (

    <div className="menu-container">
      <h3>Nuestro menú popular</h3>
      <p>Contamos con una amplia variedad de deliciosos platillos </p>

      <div className='card-container'>
        {menuSite.map((items) =>

          <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" className="card-item-img" src={items.data.img} />
            <Card.Body className="card-item">
              <Card.Title>{items.data.title}</Card.Title>
              <Card.Text>
                {items.data.description}
              </Card.Text>
              <Card.Text className="price-text">
                ${items.data.price}
              </Card.Text>
              <Button className="" variant="outline-warning">Ver producto</Button>
            </Card.Body>
          </Card>

        )}
      </div>
    </div>
  )
}

export default Menu