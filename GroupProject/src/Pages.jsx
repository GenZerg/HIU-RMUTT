
import React, { useEffect, useRef, useState } from 'react'
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import Navbar from './components/Navbar'
import Foodtype from './Pages/Foodtype'
import Showcase from './Pages/Showcase'
import Thaimov from './Pages/Thaimov'
import Japanmov from './Pages/Japanmov'
import Member from './Pages/Member'
import './App.css'

export default function Pages() {
  const data = ({
    simg1:'../../public/images/SRYP3864.png',
    simg2: "../../public/images/TNCR8008.png",
    simg3:"../../public/images/glass.png",
    simg4:"../../public/images/Mask Group 3.png",

  });

  const datalist = [{
    thillustration : '../../public/images/items/curry.png',
    thfood1  : "../../public/images/items/curry.png",
    thfood2 : "../../public/images/items/curry.png",

    jpilustration :'../../public/images/items/ramen.png',
    jpfood1  : "../../public/images/items/ramen.png",
    jpfood2 : "../../public/images/items/ramen.png",

    about : "About food",
    foodname : "Food name",
   
  },
  {
    thillustration : '../../public/images/items/curry.png',
    thfood1  : "../../public/images/items/curry.png",
    thfood2 : "../../public/images/items/curry.png",
    
    jpilustration : '../../public/images/items/sushi.png',
    jpfood1  : "../../public/images/items/sushi.png",
    jpfood2 : "../../public/images/items/sushi.png",

    about : "About food",
    foodname : "Food name",
  },
  {
    thillustration : '../../public/images/items/curry.png',
    thfood1  : "../../public/images/items/curry.png",
    thfood2 : "../../public/images/items/curry.png",
    
    jpilustration : '../../public/images/items/takoyaki.png',
    jpfood1  : "../../public/images/items/takoyaki.png",
    jpfood2 : "../../public/images/items/takoyaki.png",

    about : "About food",
    foodname : "Food name",
  },


]
  const items = datalist.map((item)=>
    <Foodtype 
    thillustration = {item.thillustration} 
    thfood1 = {item.thfood1} 
    thfood2 = {item.thfood2}
    jpilustration = {item.jpilustration}
    jpfood1 = {item.jpfood1}
    jpfood2 = {item.jpfood2}
    about = {item.about}
    foodname = {item.foodname}
    />
  )


  const [Img , setImg ] = useState(false)
  
  function scrollhandler(){
    let Home = document.getElementById('Home')
    let Detail = document.getElementById('Detail')
    let Foodtype= document.getElementById('Foodtype')
    let Member= document.getElementById('Member')

    let postHome  = Home.offsetTop  
    let postDetail  = Detail.offsetTop
    let postFoodtype  = Foodtype.offsetTop
    let postMember  = Member.offsetTop

    console.log(window.pageYOffset , postDetail)
    
    if (window.pageYOffset >= postHome){
      setImg(false)
    }
  
    if (window.pageYOffset >= postDetail) {
      setImg(true)
    }
    
    if (window.pageYOffset >= postFoodtype){
      setImg(false)
    }
    if (window.pageYOffset >= postMember){
      setImg(true)
    }
  
  }

  window.addEventListener('scroll',scrollhandler)
  return (
    <div className='main'>
        <Navbar status = {Img} />
        <div id = 'Home'><Home/></div>
        <div id = 'Detail'><Detail/></div>
        <div id = 'Foodtype'>
          {items}
        </div>
        <Thaimov/>
        <Japanmov/>
        <div id = "Member">
          <Member/>
          <Showcase/>
        </div>

    </div>
  )
}
