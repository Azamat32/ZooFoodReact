import React from 'react'
import logo from '../../assets/logo.svg'

import './Header.scss'
function Header() {
  return (
    <div className='header'>
      
      <div className="header_content">
        <div className="header_logo">
            <img src={logo} alt="" />
        </div>
        <div className="header_links">
            <a href="#">наши корма</a>
            <a href="#">калькулятор</a>

            <a href="#">где купить </a>
            <a href="#">о нас</a>
            <a href="#">полезные статьи</a>

        </div>
        </div>
    </div>
  )
}

export default Header