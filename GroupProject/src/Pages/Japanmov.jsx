import React from 'react'
import './css/mov.css'

export default function Japanmov() {
  return (
    <section className='japanmov-section overflow-hidden'>
         <div className='video-container'>
         <video src = "../../public/videos/Japanmov.mov" autoPlay muted loop></video>
      </div>
    </section>

  )
}
