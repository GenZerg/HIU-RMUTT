import React from 'react'
import { useState } from 'react'

import "./css/FoodtypeJP.css"
import FoodLayout from '../components/FoodLayout'

export default function FoodtypeJP() {
  return (
    <section className='Foodtype-section'>
      <div className='img-wrap'>
    <img className = "foodtypeimg" src='../../public/images/JP-BG.png'></img>
    </div>
      <div className='Foodtype-wrap'>
        <div className='thai-food'>
        <img className = "imgthfood" src='../../public/images/font-th-jp-foods-02.png'></img>
          </div>
          <div className='th-wrap'>
          <div class="grid-container">
<div class="grid-item"><img className = "foodth1" src='../../public/images/items/taiyaki.png'></img></div>
<div class="grid-item"><img className = "foodth2" src='../../public/images/items/takoyaki.png'></img></div>
<div class="grid-item"><img className = "foodth3" src='../../public/images/items/ramen.png'></img></div>  
<div class="grid-item"><img className = "foodth4" src='../../public/images/items/uni.png'></img></div>
<div class="grid-item"><img className = "foodth5" src='../../public/images/items/sushi.png'></img></div>
<div class="grid-item"><img className = "foodth6" src='../../public/images/items/curry.png'></img></div>  
</div>
        </div>
        </div>
  </section>
  )
}
