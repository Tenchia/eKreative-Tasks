import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


function HeaderHome() {
  return (
    <>
    <div className="header-container">
      <Link to="/" className='logo'>Flat UI Colors</Link>
    </div>
    </>
  )
}

export default HeaderHome