import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UrlParser from './UrlParser';

describe('<UrlParser />', () => {
  test('it should mount', () => {
    render(<UrlParser />);
    
    const urlParser = screen.getByTestId('UrlParser');

    expect(urlParser).toBeInTheDocument();
  });
});