import React from 'react'
import './css/member.css'
import Memberbox from '../components/Memberbox'
import i18n from '../i18n'
import { useTranslation } from 'react-i18next'

export default function Member() {
  const {t , i18n} = useTranslation();

  const data = ({
    profile:"https://cdn.discordapp.com/attachments/313165733750112258/1068948092415660262/149071.png",
    kahoprofile:"src = ???",
    burapaprofile:"???",
    nanprofile:"???",
    misakiprofile:"???",
    
  })
  return (
    <section className='Member-container'>
        <div className='Member-wrap'>
          <div className='Member-layout'>
            <div className='Member-title'>{t('Member')}</div>
            <div className='memberbox'>
              <Memberbox name = '◆Misaki' contact = '◆Twitter:@mii_suke66' comment = '◆May you eat lots of delicious food( ᴗ    ᴗ )' profile = {data.profile}/>
              <Memberbox name = '・Kaho' contact = '・Twitter@rn_kaaa03' comment = "・Let's eat a lot~" profile = {data.profile}/>
              <Memberbox name = '-Nan' contact = '-instagram sb_naan' comment = '- enjoy eating ✌🏻' profile = {data.profile}/>
              <Memberbox name = '►Burapha' contact = '►instagram burapha_s.w' comment = "►Let's eat together! " profile = {data.profile}/>
            </div>
         
          </div>
        </div>
        
    
     </section>
  )
}
