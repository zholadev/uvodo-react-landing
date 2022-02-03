import React from 'react'
import Container from '../partials/Container'
import image from '../../helpers/image'
import './navbar.sass'
import Button from '../button/Button'

const Navbar = () => {
  return (
    <div className="navbar">
      <Container>
        <div className="navbar-box">
          <div className="logo-box">
            <img src={image.logoPrimary} alt="logo" />
          </div>

          <nav role={'navigation'}>
            <ul className="navbar-category-list">
              <li className="category-list-item">Home</li>
              <li className="category-list-item">Features</li>
              <li className="category-list-item">Pricing</li>
              <li className="category-list-item">Resources</li>
              <li className="category-list-item">Support</li>
            </ul>
          </nav>

          <div className="btn-box">
            <Button big text="Buy Uvodo Now" width={158} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
