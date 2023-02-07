import React from 'react'
import { useState} from 'react'
import './css/foodlayout.css'
export default function FoodLayout(props) {
  return (
    <div className='FoodLayout'>
          <div className='foodwrap'>
               <div className='top'>
                    <h1>{props.Title}</h1>
               </div>
               <div className='middle'>
                    <div className='ml'>
                         <div className='about'><h2>{props.about}</h2></div>
                         <div className='name'>{props.name}
                         <button className='namebtn'>{props.btntext}</button></div>
                    </div>
                    <div className='mr'>
                         <div className='imgbox'>
                              <img src = {props.images}></img>
                         </div>
                    </div>
               </div>
               <div className='bottom'>
                    <div className='img1'>
                         <img src = {props.simg1}></img>
                    </div>
                    <div className='img2'>
                         <img src = {props.simg2}></img>
                    </div>
               </div>
               
          </div>
     </div>
  )
}
