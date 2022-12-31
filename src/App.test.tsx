import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';
import { deepPurple, green, orange, red, teal } from '@mui/material/colors';

const colorTheme = [red, deepPurple, orange, teal, green]

test('renders learn react link', () => {
  render(<App secondary={colorTheme[Math.floor(Math.random() * colorTheme.length)]}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
