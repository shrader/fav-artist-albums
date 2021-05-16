/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import InvalidError from './InvalidError';

describe('InvalidError componenet functions properly', () => {
  test('renders error', () => {
    render(<InvalidError />);
    const errorElement = screen.getByText('Error:', { exact: false });
    expect(errorElement).toBeInTheDocument();
  });
});
