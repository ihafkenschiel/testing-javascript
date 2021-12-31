import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    //screen.debug() // console.log
    expect(screen.getByText('Search')).toBeInTheDocument() // Exact string match = fails
    expect(screen.getByText('Search:')).toBeInTheDocument() // Exact string match = succeeds
    expect(screen.getByText(/Search/)).toBeInTheDocument() // Regex partial match = succeeds
  });
});