/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar functions proprerly', () => {
  test('renders navbar', () => {
    const link = 'www.google.com';
    const artistName = 'fake Artist';
    render(<Navbar artistName={artistName} artistLink={link} />);
    const artistNameDisp = screen.getByText('fake Artist', { exact: true });
    const inputDisplay = screen.getByPlaceholderText('Artist Name', { exact: true });
    const changeArtistBtn = screen.getByText('Change Artist', { exact: true });
    expect(artistNameDisp).toBeInTheDocument();
    expect(inputDisplay).toBeInTheDocument();
    expect(changeArtistBtn).toBeInTheDocument();
  });
});
