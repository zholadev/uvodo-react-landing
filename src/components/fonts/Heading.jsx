import React from 'react'

const Heading = (props) => {
  const { heading, subtitle, text } = props

  return heading ? (
    <div className="heading">{text}</div>
  ) : subtitle ? (
    <div className="subtitle">{text}</div>
  ) : null
}

export default Heading
