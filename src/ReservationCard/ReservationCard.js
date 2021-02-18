import React from 'react'
import './ReservationCard.css'

const ReservationCard = ({name, date, time, numOfGuest}) => {
  return (
    <div className='card'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of Guest:{numOfGuest}</p>
    </div>
  )
}

export default ReservationCard;
