import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'
import logo2 from '../../covers/header/logo2.png'

export default function Footer() {
  return (
    <div className='footer'>
        <div><NavLink><img src={logo2}/></NavLink></div>
        <div className='mail'>
            <h1>ВСЕ ПРАВА ЗАЩИЩЕНЫ  2021</h1>
            <div><NavLink className='mailCom'>INFO@GMAIL.COM</NavLink></div>
        </div>
        <ul>
            <li><NavLink className='footer-nav' to='/'>ГЛАВНАЯ</NavLink></li>
            <li><NavLink className='footer-nav' to='/fight-page'>СРАЖЕНИЯ</NavLink></li>
            <li><NavLink className='footer-nav' to='/question-page'>ЧАВО</NavLink></li>
            <li><NavLink className='footer-nav' to='/news'>НОВОСТИ</NavLink></li>
        </ul>
        <div className='goTop'>
            <div className="box-left"></div>
            <div className="box-right">GO TO TOP</div>
        </div>
    </div>
  )
}
