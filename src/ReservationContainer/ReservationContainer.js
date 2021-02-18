import React from 'react'
import './ReservationContainer.css'
import ReservationCard from '../ReservationCard/ReservationCard.js'

const ReservationContainer = ({reservations}) => {
  return (
    <div>
      {reservations.map(reservation => 
        <ReservationCard 
          key={reservation.id}
          id={reservation.id}
          name={reservation.name}
          date={reservation.date}
          time={reservation.time}
          numOfGuest={reservation.number}
        />)}
    </div>
  )
}

export default ReservationContainer