import React from 'react'
import { NavLink } from 'react-router-dom'
import '../sass/header.scss'

const Header = () => {
  return (
    <div className='header'>
        <img src="https://preview.colorlib.com/theme/educature/img/logo.png" alt="err" />
        <ul>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/add'}>Add</NavLink></li>
            <li><NavLink to={'/basket'}>Basket</NavLink></li>
            <li><NavLink to={'/wishlist'}>Wishlist</NavLink></li>
        </ul>
    </div>
  )
}

export default Header