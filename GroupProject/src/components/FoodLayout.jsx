import React from 'react'
import { useState} from 'react'
export default function FoodLayout(props) {
  return (
     <section className='Foodtype-section'>
     <img className = "foodtypeimg" src={props.imagesbg}></img>
       <div className='Foodtype-wrap'>
         <div className='thai-food'>
         <img className = "imgthfood" src={props.imagestitle}></img>
           </div>
           <div className='th-wrap'>
           <div class="grid-container">
 <div class="grid-item"><img className = "foodth1" src={props.imagesshow1}></img></div>
 <div class="grid-item"><img className = "foodth2" src={props.imagesshow2}></img></div>
 <div class="grid-item"><img className = "foodth3" src={props.imagesshow3}></img></div>  
 <div class="grid-item"><img className = "foodth4" src={props.imagesshow4}></img></div>
 <div class="grid-item"><img className = "foodth5" src={props.imagesshow5}></img></div>
 <div class="grid-item"><img className = "foodth6" src={props.imagesshow6}></img></div>  
</div>
         </div>
         </div>
   </section>
  )
}
