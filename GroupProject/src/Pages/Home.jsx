import React from 'react'
import { useParams } from 'react-router-dom'
import i18n from '../i18n'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import './css/Home.css'

export default function Home() {
  const {t , i18n} = useTranslation();
  
  let {lang} = localStorage.getItem('i18nextLng') || 'en';
  
  
 
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
      <div className='home-layout'>    
        <div className='title'>
          <img src='../../public/images/Mask Group 3.png'></img>
        </div>
      </div>
    </section>
  )
}
