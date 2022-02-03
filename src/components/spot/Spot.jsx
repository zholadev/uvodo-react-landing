import React from 'react'
import './spot.sass'
import Container from '../partials/Container'
import Heading from '../fonts/Heading'
import Button from './../button/Button'
import image from '../../helpers/image'

const Spot = () => {
  return (
    <div className="spot-container">
      <Container>
        <div className="box">
          <div className="right-section">
            <img src={image.spotBg} alt="" className="left-img" />
            <img src={image.spotTop} alt="" className="center-img" />
            <img src={image.spotBottom} alt="" className="right-img" />
          </div>

          <div className="left-section">
            <div className="top-text">PAY ONCE, USE LIFETIME</div>
            <Heading text="It’s how you sell on the spot" heading />
            <Heading
              text="Sell from your online store and turn social media accounts into shoppable channels."
              subtitle
            />

            <div className="btn-group">
              <Button small dark text="Buy Uvodo now" width={211} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Spot
