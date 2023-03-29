import React from 'react'
import './game-cover.css'

export const GameCover = ({image}) => {
    return (
        <img className='game-cover' src={ image } alt='cover' />
    )
}
