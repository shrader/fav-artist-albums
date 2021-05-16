/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import AlbumList from './AlbumList';

describe('AlbumList functions properly', () => {
  test('AlbumList renders properly', () => {
    const artistAlbumData = {
      results: [{
        artistName: 'Great Artist',
        primaryGenreName: 'Awesome Genre',
        artWorkUrl100: 'https://via.placeholder.com/350x150',
        collectionName: 'Fantastic Collection',
        collectionViewUrl: 'https://sharpspring.com/',
        releaseDate: '2021-05-17T08:00:00Z',
        copyright: '℗ 2021 John Shrader',
      }],
    };
    render(<AlbumList artistAlbumData={artistAlbumData} />);
    const AlbumListDisplay = screen.getByText('Great Artist', { exact: true });
    expect(AlbumListDisplay).toBeInTheDocument();
  });
});
