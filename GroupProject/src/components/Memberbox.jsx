import React from 'react'
import './css/memberbox.css'
export default function Memberbox(props) {
  return (
    <div className='Memberbox-container'>
          <div className='item-layout'>
               <div className='Member-img'>
                    <img src = {props.profile}></img>
               </div>
               
          </div>
          <div className='Detail'>
               <div className='detail-wrap'>
                    <p>{props.name}</p>
                    <p>{props.contact}</p>
                    <p>{props.comment}</p>
               </div>
           
          </div>
      
     </div>
  )
}
