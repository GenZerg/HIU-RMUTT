import React from 'react'
import { useState } from 'react'

import "./css/Foodtype.css"
import FoodLayout from '../components/FoodLayout'

export default function Foodtype(props) {
  const data = ({
    th: "Thai food",
    jp : "Japan food",
    btext: "Clickme",
  })

  return (
    <section className='Foodtype-section'>
        <div className='Foodtype-wrap'>
          <div className='thai-food'>
            <img className = "foodtypeimg" src='../../public/images/SRYP3864.png'></img>
            <FoodLayout Title = {data.th} about = {props.about} images = {props.thillustration}  name = {props.foodname} btntext = {data.btext} simg1 ={props.thfood1}  simg2  = {props.thfood2}/>
          </div>
          <div className='jpfood'>
            <FoodLayout Title = {data.jp} about = {props.about} images = {props.jpilustration}  name = {props.foodname} btntext = {data.btext} simg1 = {props.jpfood1} simg2 = {props.jpfood2}></FoodLayout>
          </div>
        
        </div>
    </section>
  )
}
