import React from 'react'
import Slide from '../shared/Slide'
import Jumbotron from '../shared/Jumbotron'
import '../../App.css';

function Home() {
  return (
    <div className='home-container'>
      <Jumbotron/>
      <Slide/>
    </div>
  )
}

export default Home