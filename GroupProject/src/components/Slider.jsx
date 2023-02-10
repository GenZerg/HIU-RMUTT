import React from 'react'
import './css/slider.css'

export default function Slider(props) {
  return (
    <div className='slidercontainer'>
      <div className='sliderimg'> 
        <img src = {props.img}></img>
      </div>
     
    </div>
  )
}
