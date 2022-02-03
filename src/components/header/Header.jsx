import React from 'react'
import HeaderBorder from '../headerBorder/HeaderBorder'
import Navbar from '../navbar/Navbar'
import Socials from '../socials/Socials'

const Header = () => {
  return (
    <div className="header-container">
      <Navbar />
      <HeaderBorder />
      <Socials />
    </div>
  )
}

export default Header
