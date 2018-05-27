import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(<App />, document.querySelector('#root'));
