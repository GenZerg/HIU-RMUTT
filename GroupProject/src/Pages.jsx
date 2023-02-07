import React from 'react'
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
  return (
    <div className='main'>
        <Navbar/>
        <Home/>
        <Detail/>
        <Foodtype simg1 ={data.simg1} simg2 = {data.simg2} simg3 = {data.simg3} simg4 = {data.simg4}/>
        <Foodtype/>
        <Foodtype/>
        <Showcase/>
        <Thaimov/>
        <Japanmov/>
        <Member/>
    </div>
  )
}
