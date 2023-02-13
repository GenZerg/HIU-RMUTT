import React from 'react'
import './css/member.css'
import Memberbox from '../components/Memberbox'
import i18n from '../i18n'
import { useTranslation } from 'react-i18next'
import Image from 'react-bootstrap/Image'

export default function Member() {
  const {t , i18n} = useTranslation();

  const data = ({
    profile:"https://cdn.discordapp.com/attachments/313165733750112258/1068948092415660262/149071.png",
    kahoprofile:"src = ../../public/images/members/Kaho.jpg",
    burapaprofile:"src = ../../public/images/members/burapha2.jpg",
    nanprofile:"src = ../../public/images/members/Nan.jpg",
    misakiprofile:"src = ../../public/images/members/Misaki.jpg",
    
  })
  return (
    <section className='Member-container overflow-hidden' id='Member'>
        <div className='Member-wrap'>
          <div className='Member-layout'>
            <div className='Member-title'>{t('Member')}</div>
            <div className='memberbox pb-100px'>
              <Memberbox name = '◆Misaki' contact = '◆Twitter:@mii_suke66' comment = '◆May you eat lots of delicious food( ᴗ    ᴗ )' profile = {data.kahoprofile}/>
              <Memberbox name = '・Kaho' contact = '・Twitter@rn_kaaa03' comment = "・Let's eat a lot~" profile = {data.misakiprofile}/>
              <Memberbox name = '-Nan' contact = '-instagram sb_naan' comment = '- enjoy eating ✌🏻' profile = {data.nanprofile}/>
              <Memberbox name = '►Burapha' contact = '►instagram burapha_s.w' comment = "►Let's eat together! " profile = {data.burapaprofile}/>
            </div>
            <div className='Logo-wrap'>
            <center></center>
            </div>
            <div class="footer-basic">
        <footer>
            <center>
            <img src='../images/Group-62.png' alt='logo' className='Logo pt-40px pb-40px'/>
            <p class="copyright">Copyright © 2023</p>
            </center>

        </footer>
    </div>
          </div>
        </div>
     </section>

      
  )
}
