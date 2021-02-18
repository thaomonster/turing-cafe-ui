import React, { Component } from 'react';
import './App.css';
import fetchRequests from '../fetchRequests';
import ReservationContainer from '../ReservationContainer/ReservationContainer';
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  

  componentDidMount() {
    fetchRequests.getAllReservations()
      .then(data => this.setState({reservations: data}))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          <ReservationContainer reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
