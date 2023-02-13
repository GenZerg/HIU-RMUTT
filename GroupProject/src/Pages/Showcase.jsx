import React from 'react'
import './css/showcase.css'

export default function Showcase() {
  return (
    <section className='Showcase-section overflow-hidden grid'>   
            <div className='Showcase-wrap flex flex-col justify-center items-center h-full w-full md:flex-row md:justify-between md:items-center md:px-20 md:py-10 md:gap-10 md:gap-x-20 md:gap-y-0'>
              <div className='left w-full h-full flex justify-center'>
                <img className='min-w-full min-h-full object-cover' src='../../public/images/items/showcase-left.png' />
              </div>
              <div className='right w-full h-full flex justify-center'>
              <img className='min-w-full min-h-full object-cover ' src='../../public/images/items/showcase-right.png' />
                </div>
            </div>
    </section>
 
  )
}
