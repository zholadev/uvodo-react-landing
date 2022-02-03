import React from 'react'
import Container from '../partials/Container'
import './investment.sass'
import Heading from '../fonts/Heading'

const Investment = () => {
  return (
    <div className="investment-container">
      <Container>
        <div className="box">
          <Heading text="One cost, lifetime investment." heading />
          <Heading
            text="It’s a one-time payment. Pay once, use for a lifetime."
            subtitle
          />
        </div>
      </Container>
    </div>
  )
}

export default Investment
