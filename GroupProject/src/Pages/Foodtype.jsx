import React from 'react'
import { useState } from 'react'
import "./css/Foodtype.css"
import i18n from '../i18n'
import { Trans,useTranslation } from 'react-i18next'
import {useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import Foodslider from '../components/Foodslider'
import Foodpopup from '../components/Foodpopup'


export default function Foodtype(props) {
  const {t , i18n} = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = React.useState('md')

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
    
  const imgshow = props.src.map((items,i)=>
      <img className = ' w-3/5 md:w-4/5 object-cover justify-self-center m-4 cursor-pointer'src = {items.src} onClick = {()=>Addevent(i,items)} key={i}/>
    )
  const resimgshow = props.src.map((items,i) =>
    <Foodslider src = {items.src} title = {items.title} onClick = {onOpen} key = {i}/>
  )

  return (
    <section className='w-full h-screen relative overflow-hidden' id = {props.id}>
      <div className='img-wrap absolute z-0 ' >
        <img className = "foodtypeimg" src={props.bg}></img>
      </div>
      <div className='w-full h-full absolute z-2 flex items-center justify-center'>
        <div className='w-100rem h-full flex justify-center'>
          <div className='w-full h-fit  mt-16 flex justify-center absolute'>
            <img  className= 'w-45rem' src={props.title}></img>
          </div>
        <div className='w-full h-full flex items-center  justify-center absolute z-0'>
          <div className="grid grid-cols-2  md:grid-cols-3 w-110rem  h-2/4 ml-2 mr-2 mt-37 items-center">
              {imgshow}
          </div>
          
          <div className='w-full h-full flex items-center jusitfy-center 1sm:hidden '>
            <Foodslider src = {props.src}/>
          </div>

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
        </div>
      </div>
  </section>
  )
}