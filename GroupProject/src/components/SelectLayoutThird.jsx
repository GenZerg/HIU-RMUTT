import React from 'react'

export default function SelectLayoutThird(props) {

  return (
    <div className='selectorlayout fcolor'>
      <div className='selector-Wrap'>
      <div className='selector-title'>
        <img src = {props.title}></img>
      </div>
      <div className='selector-detail'>
        {props.detail}
        </div>
        </div> 
    </div>
  )
}
