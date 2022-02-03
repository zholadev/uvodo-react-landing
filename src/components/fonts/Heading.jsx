import React from 'react'
import './heading.sass'

const Heading = (props) => {
  const { heading, subtitle, text, mb0 } = props

  return heading ? (
    <div className={mb0 ? 'heading mb0' : 'heading'}>{text}</div>
  ) : subtitle ? (
    <div className="subtitle">{text}</div>
  ) : null
}

export default Heading
