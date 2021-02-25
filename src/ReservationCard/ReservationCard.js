import React from 'react'
import './ReservationCard.css'

const ReservationCard = ({id, name, date, time, number, cancelReservation}) => {
  return (
    <div className='card'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of Guest:{number}</p>
      <button onClick={ () => cancelReservation(id)}>Cancel</button>
    </div>
  )
}

export default ReservationCard;
