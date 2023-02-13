import React from 'react'
import { useParams } from 'react-router-dom'
import i18n from '../i18n'
import { useTranslation } from 'react-i18next'
import { useEffect, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay } from 'swiper';
import './css/Home.css'
import 'swiper/css';
import  'swiper/css/autoplay'

import Slider from '../components/Slider'

export default function Home() {
  const {t , i18n} = useTranslation();
  
  let {lang} = localStorage.getItem('i18nextLng') || 'en';

  const storage = [{
    src : '../../public/images/items/curry.png'
  },
  {
    src : '../../public/images/items/ramen.png'
  },
  {
    src : '../../public/images/items/sushi.png'
  },
  {
    src : '../../public/images/items/taiyaki.png'
  },
  {
    src : '../../public/images/items/takoyaki.png'
  },
  {
    src : '../../public/images/items/uni.png'
  },
  {
    src : '../../public/images/items/kaitod.png'
  },
  {
    src : '../../public/images/items/hoitod.png'
  },
  {
    src : '../../public/images/items/roti.png'
  },
  {
    src : '../../public/images/items/glass.png'
  },
  {
    src : '../../public/images/items/krapow.png'
  },
  {
    src : '../../public/images/items/Padthai.png'
  }
]
  const data = storage.map((item,i)=>
    <SwiperSlide className='swiper-items' key={i}>
      <Slider img = {item.src}/>
    </SwiperSlide>
  )

 
  function languageInit(){
    if(lang === null){
      lang = 'en'
      console.log("lang is null")
      console.log(lang)
    }else{
      lang = localStorage.getItem('i18nextLng')
      console.log(lang)
    }
    i18n.changeLanguage(lang)
    //change url to current language
    window.history.pushState({}, null, "/" + lang);
  }
  useEffect(()=>{
    languageInit();
  },[])

  function HandleLang(data){
    window.location.href = "/" + data
  }
  return (
    <section className='Home-section' id = "Home">
      <video className = 'bg' src = "../../public/videos/top.mov" autoPlay muted loop></video>
      <div className = "img-top">
        <img className = 'img-cheap' src='../../public/images/TNCR8008.png'></img>
      </div>

      <div className='home-layout'>    

        <div className='title w-20rem h-20rem 1sm:w-30rem 1sm:h-30rem'>
          <img src='../../public/images/Mask Group 3.png'></img>
        </div>

      </div>
      <div className='slidercontent w-25rem 2sm:w-2/4 h-10rem md:h-30% 2xs:w-70rem'>
        <Swiper
          // install Swiper modules
          modules={[ Pagination, Scrollbar, A11y ,Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          
          loop = {true}
          autoplay={{ delay: 2000, disableOnInteraction:false}}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className = "swiper-task w-full h-3/5 2sm:h-4/5 2sm:w-45rem 2xs:w-full 2xs:h-full"
        >
            {data}
          ...
        </Swiper>
      </div>        
     
    </section>
  )
}
