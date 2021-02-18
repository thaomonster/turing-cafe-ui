import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      id: Date.now(),
      name: '',
      date: '',
      time: '',
      numOfGuest: '',
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
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
        name='numOfGuest'
        value={this.state.numOfGuest}
        onChange={event => this.handleChange(event)}
      />
      <button>Make Reservation</button>
    </form>
  }
}

export default Form