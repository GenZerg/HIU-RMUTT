import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';
import Foodpopup from './Foodpopup';
import { useState } from 'react';
import {useDisclosure,
     Modal,
     ModalOverlay,
     ModalContent,
     ModalHeader,
     ModalFooter,
     ModalBody,
     ModalCloseButton,
   } from '@chakra-ui/react'

import 'swiper/css';
import  'swiper/css/autoplay'
import 'swiper/css/navigation';
import './css/slider.css'

export default function Foodslider(props) {
     const {t , i18n} = useTranslation();
     const { isOpen, onOpen, onClose } = useDisclosure()
     const data = props.src.map((items,i)=>
     <SwiperSlide className='swiperslide font-sans' onClick = {()=>Addevent(i,items)} key={i}>
          <div className='w-full h-fit flex flex-col items-center'>
               <img src = {items.src}></img>
               <div className='w-full h-full text-4xl font-semibold text-white'>
                    {t(items.title)}
               </div>
          </div>
          </SwiperSlide>
     )
     
     const [items, Useitems] = useState('')
     const [Title , UseTitle] = useState('')
     const [Dis , UseDis] = useState('')
     const [Jpdis , UseJpdis] = useState('')
     const [Jptopic , Usejptopic] = useState('')
     const [Tag, Usetag] = useState('')
     const [Itemimg, UseItemimg] = useState([])
     
     function Addevent(i,data){
          onOpen()
      
          Useitems(data.src)
          UseDis(data.titledis)
          Usejptopic(data.jptitle)
          Usetag(data.tag)
          UseJpdis(data.jpdis)
      
          UseItemimg(data.img)
          UseTitle(i+1 +". " + t(data.title) );
         
        }

  return (
    <div className='w-full h-fit flex'>
          <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y ,Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          loop = {true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className = "w-full h-full myswiper"
          
          >
          {data}
        
        </Swiper>
     
        <Modal onClose={onClose} size={'6xl'} isOpen={isOpen} >
            <ModalOverlay />
              <ModalContent>
                  <ModalCloseButton />
                  <ModalBody>
                  </ModalBody>
                <ModalFooter className='w-full h-full '>
                  <Foodpopup src = {items} title = {Title} color = {props.color} dis = {Dis} Jptopic = {Jptopic} jpdis = {Jpdis} tag = {Tag} img = {Itemimg}/>
                </ModalFooter>
               </ModalContent>
          </Modal>

    </div>
  )
}
