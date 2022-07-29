import React from 'react'
import Logo from '../../assets/img/logo.png'
import '../../styles/main.scss'

const Header = () => {
  return (
    <div className='header'>
        <img src={Logo} alt="logo" className='hearder-logo'/>
        <ul className='header-navigation'>
            <li>Accueil</li>
            <li>Profil</li>
            <li>Réglage</li>
            <li>Communauté</li>
        </ul>
    </div>
  )
}

export default Header