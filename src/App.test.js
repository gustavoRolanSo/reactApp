import { render, screen } from '@testing-library/react';
import App from './App.js';
import React from "react"

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello aws/i);
  expect(linkElement).toBeInTheDocument();
});
