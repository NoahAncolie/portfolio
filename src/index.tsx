import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import { blue, green, orange, purple, red } from '@mui/material/colors';

const colorTheme = [red, purple, orange, green, blue]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App secondary={colorTheme[Math.floor(Math.random() * colorTheme.length)]}/>
  </React.StrictMode>
);

reportWebVitals();