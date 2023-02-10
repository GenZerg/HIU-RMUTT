import React from 'react'

export default function SelectLayoutsecond(props) {
  
  const data = ({
    title:"../public/images/TNCR8008.png",
    detail:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, corrupti ratione veniam eos accusantium eligendi, odio quibusdam cupiditate laboriosam harum molestiae optio? Deserunt obcaecati nam odit rerum vero officia sed.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, corrupti ratione veniam eos accusantium eligendi, odio quibusdam cupiditate laboriosam harum molestiae optio? Deserunt obcaecati nam odit rerum vero officia sed.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, corrupti ratione veniam eos accusantium eligendi, odio quibusdam cupiditate laboriosam harum molestiae optio? Deserunt obcaecati nam odit rerum vero officia sed.",
    
  })


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
