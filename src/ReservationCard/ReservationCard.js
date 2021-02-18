import React from 'react'
import './ReservationCard.css'

const ReservationCard = ({name, date, time, number}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of Guest:{number}</p>
    </div>
  )
}

export default ReservationCard;
