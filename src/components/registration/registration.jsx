import React from 'react'
import { NavLink } from 'react-router-dom'
import './registration.css'

export default function Registration() {
  return (
    <div className='form'>
      <NavLink className='sign-up'>Регистрация</NavLink>
      <NavLink className='sign-in'>Войти</NavLink>
    </div>
  )
}
