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

  render() {
    <form>
      <input 
        type='text'
        name='name'
        placeholder='Name'
        value={this.state.name}
      />
       <input 
        type='date'
        name='date'
        value={this.state.date}
      />
       <input 
        type='time'
        name='time'
        value={this.state.time}
      />
      <input 
        type='number'
        name='numOfGuest'
        value={this.state.numOfGuest}
      />
      <button>Make Reservation</button>
    </form>
  }
}

export default Form