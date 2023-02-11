import React from 'react'
import { useState } from 'react'

import "./css/Foodtype.css"
import FoodLayout from '../components/FoodLayout'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Foodtype (props){

  return (
    <section className='Foodtype-section'>
      <img className = "foodtypeimg" src='../../public/images/SRYP3864.png'></img>
        <div className='Foodtype-wrap'>
          <div className='thai-food'>
          <img className = "imgthfood" src='../../public/images/font th jp foods-01.png'></img>
            </div>
            <div className='th-wrap'>
            <div class="grid-container">
  <div class="grid-item"><img className = "foodth1" src='../../public/images/items/Stir Fried Basil.png'></img></div>
  <div class="grid-item"><img className = "foodth2" src='../../public/images/items/kai tod.png'></img></div>
  <div class="grid-item"><img className = "foodth3" src='../../public/images/items/hoi tod.png'></img></div>  
  <div class="grid-item"><img className = "foodth4" src='../../public/images/items/hoi tod.png'></img></div>
  <div class="grid-item"><img className = "foodth5" src='../../public/images/items/roti.png'></img></div>
  <div class="grid-item"><img className = "foodth6" src='../../public/images/glass.png'></img></div>  
</div>
          
          </div>
          </div>
    </section>
  )
}
