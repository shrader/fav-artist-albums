/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import AlbumDetails from './AlbumDetails';

describe('AlbumDetails componenet functions properly', () => {
  test('AlbumDetails renders properly', () => {
    const AlbumData = {
      wrapperType: 'collection',
      collectionType: 'Album',
      artistId: 359553651,
      collectionId: 1482289970,
      amgArtistId: 2945353,
      artistName: 'AJR',
      collectionName: 'The Click',
      collectionCensoredName: 'The Click',
      artistViewUrl: 'https://music.apple.com/us/artist/ajr/359553651?uo=4',
      collectionViewUrl: 'https://music.apple.com/us/album/the-click/1482289970?uo=4',
      artworkUrl60: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/24/19/71/241971cd-40fc-9611-6a86-5805edec4428/source/60x60bb.jpg',
      artworkUrl100: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/24/19/71/241971cd-40fc-9611-6a86-5805edec4428/source/100x100bb.jpg',
      collectionPrice: 7.99,
      collectionExplicitness: 'explicit',
      contentAdvisoryRating: 'Explicit',
      trackCount: 13,
      copyright: '℗ 2017 AJR Productions under exclusive license to BMG Rights Management (US) LLC',
      country: 'USA',
      currency: 'USD',
      releaseDate: '2017-06-09T07:00:00Z',
      primaryGenreName: 'Alternative',
    };
    render(<AlbumDetails albumData={AlbumData} />);
    const AlbumDetailsDisplay = screen.getByText('AJR', { exact: true });
    expect(AlbumDetailsDisplay).toBeInTheDocument();
  });
});
