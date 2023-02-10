import React, { useEffect } from 'react'
import "./css/navbar.css"
import i18n from '../i18n'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'


export default function Navbar(props) {
    console.log(props.status)
    const [status , Setstatus] = useState(false)
    const {t , i18n} = useTranslation();
    const [Menustatus , SetMenustatus] = useState(false)

    function HandleLang(lang){
        i18n.changeLanguage(lang)
        window.history.pushState({}, null, "/" + lang);
        localStorage.setItem('i18nextLng', lang);
      }

    function handlelang(){
        Setstatus(status => !status)
    }
    function handleMenu(){
        SetMenustatus(Menustatus => !Menustatus)
    }


    let toggleCheck = status ? 'active' : '';
    let toggleMenuCheck = Menustatus ? 'active' : '';
    return (
    <div className='navbar'>
        <div id = 'lang'className = {`${toggleCheck}`}>  
            <div className='lang-wrap' onClick={handlelang}>
                <img src = {props.status ? t('langactive') : t('lang')}></img>
            </div>
            <div className='navpopup'>
                <div className='nav-wrap'>
                    <div className='text'>
                        <h3 onClick={()=>HandleLang("en")}>EN</h3>
                        <h3 onClick={()=>HandleLang("th")}>TH</h3>
                        <h3 onClick={()=>HandleLang("jp")}>JP</h3>
                    </div>       
                </div>    
            </div>
        </div>
        
        <div id='hammenu' className = {`${toggleMenuCheck}`}>
            <div className='menu-wrap' onClick={handleMenu}>
                <img src='../../public/images/Group 9.png'></img>
            </div>

            <div className='menupopup'>
                <div className='menupop-wrap'>
                    <div className='menu-text'>
                        <ul className='nav' id = 'nav'>
                            <li><a herf="#">{t('Menu1')}</a></li>
                            <li><a herf="#">{t('Menu2')}</a></li>
                            <li><a herf="#">{t('Menu3')}</a></li>
                            <li><a herf="#">{t('Menu4')}</a></li>
                            <li><a herf="#">{t('Menu5')}</a></li>
                            <li><a herf="#">{t('Menu6')}</a></li>
                        </ul>
                    </div>       
                </div>    
            </div>
        </div>

    </div>
  )
}
