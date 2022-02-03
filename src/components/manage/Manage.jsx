import React from 'react'
import Container from '../partials/Container'
import './manage.sass'
import Heading from './../fonts/Heading'
import image from '../../helpers/image'

const Manage = () => {
  return (
    <div className="online-manage-container">
      <Container>
        <div className="box">
          <div className="top-text">MOBILE FIRST DESIGN</div>
          <Heading text="Manage your online store" heading mb0 />
          <Heading text="from your pocket" heading />
          <Heading
            text="Enjoy complete freedom of doing business online by managing every aspect"
            subtitle
          />
          <Heading
            text="of your online store from your mobile device."
            subtitle
          />

          <img
            src={image.manageOnlineBg}
            alt="Manage your online store from your pocket"
            className="img"
          />
        </div>
      </Container>
    </div>
  )
}

export default Manage
