import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      weather: [],
    };
  }

  componentDidMount() {
    axios.get('api.openweathermap.org/data/2.5/weather?zip=37207','us')
    .then(res => {
      const weather = this.data;
      this.setState({ weather })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="App">
      
      </div>
    );
  }
}

export default App;
