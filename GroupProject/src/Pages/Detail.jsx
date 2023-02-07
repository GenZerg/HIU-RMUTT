import React from 'react'
import './css/detail.css'
import i18n from '../i18n'
import Selector from '../Selector';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';


export default function Detail() {
  const {t , i18n} = useTranslation();
  const [pages , Setpages] = useState(Selector.streetfood1)
  const [status , Setstatus] = useState(false)
  const [status2 , Setstatus2] = useState(false)
  const [status3 , Setstatus3] = useState(false)


  function HandlePageclick1(item){
    ResetBulletPointer();
    Setpages(item)
    Setstatus(status => !status)
  }

  function HandlePageclick2(item){
    ResetBulletPointer();
    Setpages(item)
    Setstatus2(status2 => !status2)
  }

  function HandlePageclick3(item){
    ResetBulletPointer();
    Setpages(item)
    Setstatus3(status3 => !status3)
  }

  function ResetBulletPointer(){
    Setstatus(false);
    Setstatus2(false);
    Setstatus3(false);
  }
  //If title1 and title2 and title3 is not active set title1 to display block 
  if(!status && !status2 && !status3){
    Setstatus(true);
  }
  


  
  let toggleCheck1 = status ? 'active' : '' ;  
  let toggleCheck2 = status2 ? 'active' : '';
  let toggleCheck3 = status3 ? 'active' : '';

  return (
    <section className='Detail-section'>
        <div className='Detail-wrap'>
            <div className='dynamic-island'>
              <div className='MenuInner'>
                <ul className='menu-list'>
                  <div id = "title1" className={`${toggleCheck1}`}>
                    <li onClick= {() => HandlePageclick1(Selector.streetfood1)}>
                      <div id = "pt" className='pointer1'></div>
                      {t('detailNav1')}
                    </li>
                  </div>
                  <div id = "title2" className={`${toggleCheck2}`}>
                    <li  onClick = {() => HandlePageclick2(Selector.streetfood2)}>
                      <div id = "pt" className='pointer2'></div>
                      {t('detailNav2')}</li>
                  </div>
                  <div id = "title3" className={`${toggleCheck3}`}>
                    <li onClick = {() => HandlePageclick3(Selector.streetfood3)}>
                      <div id = "pt" className='pointer3'></div>
                      {t('detailNav3')}</li>
                  </div>
                </ul>
                
              </div>
            </div>
            <div className='detail-shadow'></div>
              <div className='detail-container'>
                {pages}
              </div>
              <div className='detail-hide'>
                  {Selector.streetfood1}
                  {Selector.streetfood2}
                  {Selector.streetfood3}
              </div>
        </div>
    </section>
  )
}
