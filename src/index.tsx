import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import { amber, blue, blueGrey, cyan, deepOrange, deepPurple, green, indigo, lightBlue, lightGreen, orange, pink, purple, red, teal } from '@mui/material/colors';

const colorTheme = [red, purple, orange, green, blue, pink, purple, deepPurple, indigo, lightBlue, cyan, teal, lightGreen, amber, deepOrange, blueGrey]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

reportWebVitals();