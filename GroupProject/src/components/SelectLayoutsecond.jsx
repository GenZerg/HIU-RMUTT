import React from 'react'
import i18n from '../i18n'
import { Trans,useTranslation } from 'react-i18next'

export default function SelectLayoutsecond(props) {
  const {t , i18n} = useTranslation();
  const data = ({
    title:"../public/images/TNCR8008.png",
    detail:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, corrupti ratione veniam eos accusantium eligendi, odio quibusdam cupiditate laboriosam harum molestiae optio? Deserunt obcaecati nam odit rerum vero officia sed.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, corrupti ratione veniam eos accusantium eligendi, odio quibusdam cupiditate laboriosam harum molestiae optio? Deserunt obcaecati nam odit rerum vero officia sed.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, corrupti ratione veniam eos accusantium eligendi, odio quibusdam cupiditate laboriosam harum molestiae optio? Deserunt obcaecati nam odit rerum vero officia sed.",
    
  })


  return (
    <div className='selectorlayout'>
      <div className='selector-Wrap pl-3 pr-3 pb-3 md:pl-10 md:pr-10 md:pb-10 md:bg-#FFF5E5 md:border-4 border-black md:shadow-3xl'>
      <div className='w-full h-fit flex justify-center'>
        <img  className='w-full md:w-4/5 mb-20 mt-10' src={props.title} alt='title' />
      </div>
      <div className='overflow-auto w-full h-30rem text-2xl flex items-start overflow-y-scroll justify-center md:text-2xl md:h-22rem font-sans font-semibold whitespace-pre-line'>
        <div className='text-start font-sans font-semibold'>{<Trans i18nKey={props.detail} components={{ 1: <br /> }} />}</div>

        </div>
        </div> 
    </div>
  )
}
