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
    
  }
}

export default Form