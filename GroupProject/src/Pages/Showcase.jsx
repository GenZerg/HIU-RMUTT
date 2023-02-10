import React from 'react'
import './css/showcase.css'

export default function Showcase() {
  return (
    <section className='Showcase-section'>
           <div className='Showcase-wrap'>
              <div className='Show-left'>
                <img className='showcase-left' src='../../public/images/items/showcase-left.png' />
              </div>
              <div className='Show-right'>
              <img className='showcase-left' src='../../public/images/items/showcase-right.png' />
                </div>
           </div>
    </section>
 
  )
}
