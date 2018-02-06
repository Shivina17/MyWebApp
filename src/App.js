import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Plot from './Plot.js';
import Histogram from './Histogram'
import HeatMap from './HeatMap'
import PCAPlot from './PCAPlot'
import ContourPlot from './ContourPlot'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <h2>Scatter 3D</h2>
        <p>
          <Plot/>
        </p>

          <h2>Contour</h2>
          <p>
              <ContourPlot/>
          </p>



        <h2>Histogram</h2>
        <p>
            <Histogram/>
        </p>

        <h2>HeatMap</h2>
        <p>
          <HeatMap/>
        </p>


 <h2>PCA</h2>
 <p>
 <PCAPlot/>
 </p>



      </div>
    );
  }
}

export default App;
