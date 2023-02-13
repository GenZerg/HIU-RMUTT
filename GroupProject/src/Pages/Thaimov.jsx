import React from 'react'
import './css/mov.css'

export default function Thaimov() {
  return (
    <div className="mov container-fluid">
      <video autoPlay loop muted>
        <source src="videos/Thaimov.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
