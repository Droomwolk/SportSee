import React from 'react'
import '../../styles/main.scss'

import yoga from '../../assets/img/yoga.png'
import piscine from '../../assets/img/piscine.png'
import velo from '../../assets/img/velo.png'
import poids from '../../assets/img/poids.png'

const Aside = () => {
  return (
    <div className='aside'>
      <ul className='aside-list'>
        <li className='aside-list-icon'><img src={yoga} alt="yoga" /></li>
        <li className='aside-list-icon'><img src={piscine} alt="piscine" /></li>
        <li className='aside-list-icon'><img src={velo} alt="velo" /></li>
        <li className='aside-list-icon'><img src={poids} alt="poids" /></li>
      </ul>
      <p className='aside-text'>Copyright, SportSee 2020</p>
    </div>
  )
}

export default Aside