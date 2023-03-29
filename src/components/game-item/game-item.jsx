import React from 'react'
import './game-item.css'
import c1 from '../../covers/game-covers/details/1.png'
import c2 from '../../covers/game-covers/details/2.png'
import c3 from '../../covers/game-covers/details/3.png'
import { GameCover } from '../game=cover/game-cover'

export const GameItem = ({ game }) => {
  return (
    <div className="game_item">
      <GameCover image={game.image} />
      <div className="details">
        <h1>{game.title}</h1>
        <div className='game_details'>
          <img src={c1} alt="" /><span>145</span>
          <img src={c2} alt="" /><span>2 719</span>
          <img src={c3} alt="" /><span>до 25 000 с</span>
          <span className='game_genre'>{game.genre}</span>
        </div>
      </div>
    </div>
  )
}
