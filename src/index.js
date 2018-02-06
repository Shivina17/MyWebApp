import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

