import React, { Component } from 'react';
import './App.css';
import fetchRequests from '../fetchRequests';
import ReservationContainer from '../ReservationContainer/ReservationContainer';
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: '',
    }
  }

  componentDidMount() {
    this.getReservations()
  }
  
  getReservations = () => {
    fetchRequests.getAllReservations()
      .then(data => this.setState({reservations: data}))
      .catch(err => this.setState({ error: err.message }))
  }

  addReservation = (newReservation) => {
    fetchRequests.postNewReservation(newReservation)
      .then(() => {this.getReservations()})
  }

  cancelReservation = (id) => {
    fetchRequests.deleteReservation(id)
    .then(() =>  this.getReservations())
  }
  
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <ReservationContainer 
          reservations={this.state.reservations} 
          cancelReservation={this.cancelReservation}
          />
        </div>
      </div>
    )
  }
}

export default App;
