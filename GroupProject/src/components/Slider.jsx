import React from 'react'
import './css/slider.css'

export default function Slider(props) {
  return (
    <div className='slidercontainer'>
      <div className='sliderimg w-full h-full md:h-4/5 md:w-20rem'> 
        <img src = {props.img}></img>
      </div>
     
    </div>
  )
}
