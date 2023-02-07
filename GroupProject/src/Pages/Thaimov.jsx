import React from 'react'
import './css/mov.css'

export default function Thaimov() {
  return (
    <section className='Thaimov-section'>
      <div className='video-container'>
        <video src = "../../public/videos/Thaimov.mp4" autoPlay muted loop></video>
      </div>

    </section>
  )
}
