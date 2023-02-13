import React, { useEffect } from 'react'
import "./css/navbar.css"
import i18n from '../i18n'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

export default function Navbar(props) {
    const menulist = ['Home','Detail','Thfood','Jpfood','Movie','Member']
    const menulang= ['Menu1','Menu2','Menu3','Menu4','Menu5','Menu6']
 
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

    const menuitems = menulist.map((items,i)=>
    <HashLink smooth to={"/#" + items} key = {i}>
        <div className='text-2xl m-1   flex'>{t(menulang[i])}</div>
    </HashLink>
)


    let toggleCheck = status ? 'active' : '';
    let toggleMenuCheck = Menustatus ? 'active' : '';
    return (
    <div className='navbar'>
        <div id = 'lang'className = {`${toggleCheck}`}>  
            <div className='lang-wrap z-10' onClick={handlelang}>
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
        
        <div id='hammenu' className = {`${toggleMenuCheck} `}>
            <div className='menu-wrap' onClick={handleMenu}>
            <img src = {props.status ? t('langmactive') : t('langm')}></img>
            </div>

            <div className='menupopup'>
                <div className='menupop-wrap'>
                    <div className='menu-text'>
                        <div className='flex w-full flex-col font-md items-center font-sans hover:font-bold' id = 'nav'>
                            {menuitems}
                        </div>
                    </div>       
                </div>    
            </div>
        </div>

    </div>
  )
}
