import React from 'react'
import { useState } from 'react'

import "./css/Foodtype.css"
import FoodLayout from '../components/FoodLayout'

export default function Foodtype(props) {
  const data = ({
    imgsrc: '../../public/images/glass.png',
    th: "Thai food",
    jp : "Japan food",
    about : "About food",
    name : "Food name",
    btext: "Clickme",
  })

  return (
    <section className='Foodtype-section'>
        <div className='Foodtype-wrap'>
          <div className='thai-food'>
            <img className = "foodtypeimg" src='../../public/images/SRYP3864.png'></img>
            <FoodLayout Title = {data.th} images = {data.imgsrc} about = {data.about} name = {data.name} btntext = {data.btext} simg1 ={props.simg1}  simg2  = {props.simg2}/>
          </div>
          <div className='jpfood'>
            <FoodLayout Title = {data.jp} images = {data.imgsrc} about = {data.about} name = {data.name} btntext = {data.btext} simg1 = {props.simg3} simg2 = {props.simg4}></FoodLayout>
          </div>
        
        </div>
    </section>
  )
}
