import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: '',
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  clearInputs = () => {
    this.setState({
      name: '',
      date: '',
      time: '',
      number: ''
    })
  }

  submitReservation = event => {
    event.preventDefault();
    const newReservation = {
      id: Date.now(),
      ...this.state
    }
    this.props.addReservation(newReservation)
    this.clearInputs()
  }

  render() {
    return (
      <form>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <input 
          type='date'
          name='date'
          value={this.state.date}
          onChange={event => this.handleChange(event)}
        />
        <input 
          type='time'
          name='time'
          value={this.state.time}
          onChange={event => this.handleChange(event)}
        />
        <input 
          type='number'
          name='number'
          value={this.state.number}
          onChange={event => this.handleChange(event)}
        />
        <button className='reservation-btn' onClick={event => this.submitReservation(event)}>Make Reservation</button>
      </form>
    )
  }
}

export default Form