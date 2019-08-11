import React from 'react'
import { ThemeConsumer } from '../contexts/Theme'
import { NavLink } from 'react-router-dom'

export default function Nav () {

  const activeStyle = {
    color: 'rgb(187, 46, 31)'
  }
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className='row space-between'>
          <ul className='row nav'>
            <li><NavLink exact to='/' className='nav-link' activeStyle={activeStyle}>Popular</NavLink></li>
            <li><NavLink exact to='/battle' className='nav-link' activeStyle={activeStyle}>Battle</NavLink></li>
          </ul>
          <button
            style={{ fontSize: 30 }}
            className='btn-clear'
            onClick={toggleTheme}
          >
            {theme === 'light' ? '🔦' : '💡'}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  )
}