import React from 'react'
import Heading from '../fonts/Heading'
import Container from '../partials/Container'
import './header-border.sass'
import image from '../../helpers/image'
import Button from '../button/Button'

const HeaderBorder = () => {
  return (
    <div className="header-border-container">
      <Container>
        <div className="header-border-box">
          <div className="left-section">
            <div className="info-place">
              <div className="top-text">
                PAY ONE-TIME SMALL FEE, USE LIFETIME
              </div>

              <Heading heading text="Like Shopify store, with one-time fee" />
              <Heading
                subtitle
                text="Uvodo is an open-source Headless eCommerce Platform for small and medium brands, and everyone who wants to sell online."
              />

              <div className="btn-group">
                <Button text="Admin Demo" width={189} small />
                <Button text="Shop Demo" width={189} small border />
              </div>
            </div>
          </div>
          <div className="right-section">
            <img src={image.headerLeft} alt="" className="header-left-img" />
            <img
              src={image.headerCenter}
              alt=""
              className="header-center-img"
            />
            <img src={image.headerRight} alt="" className="header-right-img" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HeaderBorder
