
import React, { useEffect, useRef, useState } from 'react'
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import Navbar from './components/Navbar'
import Foodtype from './Pages/Foodtype'
import Showcase from './Pages/Showcase'
import Thaimov from './Pages/Thaimov'
import Japanmov from './Pages/Japanmov'
import Member from './Pages/Member'
import { thfood ,jpfood, widget} from './Pages/Foodtypedata'
import './App.css'

export default function Pages() {


  const [Img , setImg ] = useState(false)
  
  function scrollhandler(){
    let Home = document.getElementById('Home')
    let Detail = document.getElementById('Detail')
    let Foodtype= document.getElementById('Foodtype')
    let Member= document.getElementById('Member')
    let Showcase = document.getElementById('Showcase')

    let postHome  = Home.offsetTop  
    let postDetail  = Detail.offsetTop
    let postFoodtype  = Foodtype.offsetTop
    let postMember  = Member.offsetTop

    
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
        <div id = 'Foodtype'><Foodtype src= {thfood} bg = {widget.thbg} color={'text-red-600'} title = {widget.thtitle} id = 'Thfood' /></div>
        <div id = 'Foodtype'><Foodtype src = {jpfood} bg = {widget.jpbg} color={'text-blue-600'} title = {widget.jptitle } id = 'Jpfood'/></div>
        <div id = 'Thaimov'><Thaimov/></div>
        <div id = 'Japanmov'><Japanmov/></div>
        <div id = "Member">
          <Member/>
        </div>
        <div id = 'Showcase'><Showcase/></div>
    </div>
  )
}
