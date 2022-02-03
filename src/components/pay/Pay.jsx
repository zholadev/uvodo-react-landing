import React from 'react'
import Container from '../partials/Container'
import './pay.sass'
import Heading from '../fonts/Heading'
import Button from './../button/Button'
import image from '../../helpers/image'

const Pay = () => {
  return (
    <div className="pay-container">
      <Container>
        <div className="box">
          <div className="left-section">
            <div className="top-text">PWA READY STOREFRONT</div>
            <Heading text="Pay once, own everything" heading />
            <Heading
              text="Build the business you’ve always dreamed of. No worries about monthly fees or recurring payments."
              subtitle
            />

            <div className="btn-group">
              <Button small dark text="Buy Uvodo now" width={211} />
            </div>
          </div>
          <div className="right-section">
            <img src={image.payLeft} alt="" className="left-img" />
            <img src={image.payCenter} alt="" className="center-img" />
            <img src={image.payRight} alt="" className="right-img" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Pay
