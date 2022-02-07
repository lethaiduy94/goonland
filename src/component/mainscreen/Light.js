import React from 'react';
import light from '../../asset/images/light.svg'
import '../../scss/light.scss'
export default function Light({hours}) {
  return (
    <div  className='light-container'>
        <div style={{display :hours > 7 && hours < 16 ? 'none' : 'block'}} className='light-shadow2'></div>
        <img src={light}></img>
        <img src={light}></img>
    </div>
  )
}
