import React from 'react'
import Registration from '../registration/registration'
import './header.css'
import logo from '../../covers/header/logo.png'
import instagram from '../../covers/header/instagram.png'
import facebook from '../../covers/header/facebook.png'
import vk from '../../covers/header/vk.png'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
        <div className="logoReg wrap">
            <div><NavLink to='/'><img src={logo} alt="" /></NavLink></div>
            <Registration/>
        </div>
        <div className="nav">
            <nav className='wrap'>
                <NavLink to='/' className='navBtn'>Главная</NavLink>
                <NavLink to='/fight-page' className='navBtn'>Сражения</NavLink>
                <NavLink to='/question-page' className='navBtn'>ЧАВО</NavLink>
                <NavLink to='/news' className='navBtn'>Новости</NavLink>
            </nav>
            <div className="website">
                <div><NavLink><img src={instagram} alt=''/></NavLink></div>
                <div><NavLink><img src={facebook} alt=''/></NavLink></div>
                <div><NavLink><img src={vk} alt=''/></NavLink></div>
            </div>
        </div>
    </div>
  )
}
