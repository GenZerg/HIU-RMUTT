import React from 'react'
import './css/selector.css'
export default function SelectlayoutFirst(props) {

  return (
    <div className='selectorlayout fcolor'>
      <div className='selector-title'>
        <img src = {props.title}></img>
      </div>
      <div className='selector-detail'>
        {props.detail}
        </div> 
    </div>
  )
}


