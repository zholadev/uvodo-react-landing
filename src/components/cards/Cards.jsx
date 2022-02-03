import React from 'react'
import './cards.sass'

const Cards = (props) => {
  const { data } = props

  return (
    <div className="card-box">
      <img src={data.icon} alt="" />
      <div className="card-name">{data.name}</div>

      <div className="card-description">{data.description}</div>
    </div>
  )
}

export default Cards
