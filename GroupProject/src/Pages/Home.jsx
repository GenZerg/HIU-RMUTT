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
  }
]
  const data = storage.map((item)=>
    <SwiperSlide className='swiper-items'>
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
    <section className='Home-section'>
      <img className = "bg" src='../../public/images/SRYP3864.png'></img> 
      <div className='img-item'>
          <img className='items' src = '../../public/images/items/หอยทอด.png'></img>
          <img className='items' src = '../../public/images/items/taiyaki.png'></img>
        </div>

      <div className='home-layout'>    

        <div className='title'>
          <img src='../../public/images/Mask Group 3.png'></img>
        </div>

        <div className='text'>UMAUMA</div>
      </div>
      <div className='slidercontent'>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y ,Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          loop = {true}
          autoplay={{ delay: 2000, disableOnInteraction:false}}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className = "swiper-task"
        >
            {data}
          ...
        </Swiper>
      </div>        
     
    </section>
  )
}
