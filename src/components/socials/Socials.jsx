import React from 'react'
import image from '../../helpers/image'
import Container from '../partials/Container'
import './socials.sass'

const Socials = () => {
  return (
    <div className="social-partner-container">
      <Container>
        <div className="partner-box">
          <img src={image.stripeIcon} alt="" />
          <img src={image.paypalIcon} alt="" />
          <img src={image.envantoIcon} alt="" />
          <img src={image.instagramIcon} alt="" />
          <img src={image.whatsAppIcon} alt="" />
          <img src={image.fiveIcon} alt="" />
        </div>
      </Container>
    </div>
  )
}

export default Socials
