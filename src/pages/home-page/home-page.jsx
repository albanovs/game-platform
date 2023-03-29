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
import { GameItem } from '../../components/game-item/game-item'
import GlobalSlider from '../../components/global-slider/global-slider'



const ITEMS = [
  {
    id: 1,
    title: 'Dota 2',
    image: c1,
    genre: 'Стратегия'
  },
  {
    id: 2,
    title: 'Counter-Strike: Global Offensive',
    image: c2,
    genre: 'Шутер'
  },
  {
    id: 3,
    title: 'World of Tanks',
    image: c3,
    genre: 'RPG'
  },
  {
    id: 4,
    title: 'Playerunknowns Battlegrounds',
    image: c4,
    genre: 'RPG'
  },
  {
    id: 5,
    title: 'Minecraft',
    image: c5,
    genre: 'Стратегия'
  },
  {
    id: 6,
    title: 'League of Legands',
    image: c6,
    genre: 'Стратегия'
  },
  {
    id: 7,
    title: 'Hearth Stone',
    image: c7,
    genre: 'Стратегия'
  },
  {
    id: 8,
    title: 'Warface',
    image: c8,
    genre: 'Стратегия'
  },
]


export const HomePage = () => {
  return (
    <div className='globalPage'>
      <div className="slider">
        {/* <h1>Сыграй с нами</h1> */}
        <div className="global-slider wrap">
          {ITEMS.map(game => <GameItem game={game} key={game.id} />)}
        </div>
      </div>
      <div className="section">
        <div className='home-footer'>
          <Footer />
        </div>
      </div>
    </div>
  )
}