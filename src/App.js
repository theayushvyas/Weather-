import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from '../src/components/Form';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="container">
            <div className="title_container">
              <Titles />
            </div>
            <div className="form_container">
              <Form />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
