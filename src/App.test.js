import { render, screen } from '@testing-library/react';
import App from './App.js';
import React from "react"

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/oi/i);
  expect(linkElement).toBeInTheDocument();
});
