import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UrlShortener from './UrlShortener';

describe('<UrlShortener />', () => {
  test('it should mount', () => {
    render(<UrlShortener />);
    
    const urlShortener = screen.getByTestId('UrlShortener');

    expect(urlShortener).toBeInTheDocument();
  });
});