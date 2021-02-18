import React from 'react'
import ReservationCard from '../ReservationCard/ReservationCard.js'
import './ReservationContainer.css';

const ReservationContainer = ({reservations}) => {
  const card = reservations.map(reservation => {
  return <ReservationCard 
          key={reservation.id}
          id={reservation.id}
          name={reservation.name}
          date={reservation.date}
          time={reservation.time}
          number={reservation.number}
      />
    })

    return (
      <div className='reservation-container'>
        {card}
      </div>
    )

}

export default ReservationContainer