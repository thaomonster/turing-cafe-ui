const fetchRequests = {
  getAllReservations() {
    return fetch('http://localhost:3001/api/v1/reservations')
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Sorry we are having trouble loading your reservations')
        }
      })
  },

  postNewReservation(newReservation) {
    return fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newReservation)
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Sorry we are having trouble adding your new reservation')
        }
      })
  },

  deleteReservation(id) {
    return fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Sorry we are having trouble canceling your new reservation')
        }
      })
  }
}

export default fetchRequests