import React, { Component } from 'react';
import './App.css';
import AustinMap from "./AustinMap/index";

class App extends Component {
  render() {
    return (
      <div className="App-Wrapper">
        <div className="App-header">
          <h2>Austin Floods in a Flash</h2>
        </div>
        <div className="App-map">
          <AustinMap/>
        </div>
      </div>
    );
  }
}

export default App;
