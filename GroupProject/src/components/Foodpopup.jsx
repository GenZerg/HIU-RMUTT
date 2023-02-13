import React from 'react'
import i18n from '../i18n'
import { Trans,useTranslation } from 'react-i18next'
export default function Foodpopup(props) {
     const {t , i18n} = useTranslation();
     
     const element =  props.img.map((items)=>
          <div className='w-2/4 h-3/4 bg-white border-2 border-black rounded-md shadow-1xl flex items-center justify-center'>
               <img src = {items.data}></img>
          </div>
     )

  return (
    <div className='w-full h-full '>
     <div className='w-full h-2/4 flex '>
     <div className='w-full'>
          <img src ={props.src}/>
      </div>
      <div className='w-2/4 h-30rem '>
          <div className='w-full h-full'>
               <div className='w-full h-2/5 '>
                    <div className={'w-full h-2/4 text-5xl font-semibold font-sans flex items-center ' + props.color}>
                         {t(props.title)}
                    </div>
                    <div className='w-full h-2/4'>
                         {t(props.dis)}
                    </div>
               </div>
               <div className='w-full h-3/5 '> 
                    <div className='w-full h-1/4 flex items-center text-2xl '>
                         {t(props.Jptopic)}
                    </div>
                    <div className='w-full h-2/4'>
                    {<Trans i18nKey={props.jpdis} components={{ 1: <br /> }} />}
                    </div>
                    <div className='w-full h-1/4 flex items-end pb-3'>
                        {t(props.tag)}
                    </div>
                    
               
               </div>
          </div>
      </div>
     </div>
     <div className='w-full h-2/4 '>
      <div className='w-full h-20rem flex items-center gap-5'>
          {element}
      </div>
     </div>

    </div>
  )
}
