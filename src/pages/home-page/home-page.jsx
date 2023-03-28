import React from 'react'
import './home-page.css'
import c1 from '../../covers/game-covers/1.jpg'
import c2 from '../../covers/game-covers/2.jpg'
import c3 from '../../covers/game-covers/3.jpg'
import c4 from '../../covers/game-covers/4.jpg'
import c5 from '../../covers/game-covers/5.jpg'
import c6 from '../../covers/game-covers/6.jpg'
import c7 from '../../covers/game-covers/7.jpg'
import c8 from '../../covers/game-covers/8.jpg'
import Footer from '../../components/footer/footer'



const ITEMS = [
  {
    title: 'Dota 2',
    image: c1,
    genre: 'Стратегия'
  },
  {
    title: 'Counter-Strike: Global Offensive',
    image: c2,
    genre: 'Шутер'
  },
  {
    title: 'World of Tanks',
    image: c3,
    genre: 'RPG'
  },
  {
    title: 'Playerunknowns Battlegrounds',
    image: c4,
    genre: 'RPG'
  },
  {
    title: 'Minecraft',
    image: c5,
    genre: 'Стратегия'
  },
  {
    title: 'League of Legands',
    image: c6,
    genre: 'Стратегия'
  },
  {
    title: 'Hearth Stone',
    image: c7,
    genre: 'Стратегия'
  },
  {
    title: 'Warface',
    image: c8,
    genre: 'Стратегия'
  },
]


export default function HomePage() {
  return (
    <div className='globalPage'>
      <div className="slider">

      </div>
      <div className="section">
        <div className='home-footer'>
        <Footer/>
        </div>
      </div>
    </div>
  )
}