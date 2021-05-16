import React from 'react';
import AlbumList from './AlbumList';
import Navbar from './Navbar';
import InvalidError from './InvalidError';
import './Homepage.css';

function Homepage({ artistAlbumData, setCurrArtist, error }) {
  const artistNameForTitle = artistAlbumData.results[0].artistName;
  const artistAplleMusicLink = artistAlbumData.results[0].artistViewUrl;
  return (
    <div>
      <Navbar
        artistName={artistNameForTitle}
        artistLink={artistAplleMusicLink}
        setCurrArtist={setCurrArtist}
      />
      <h1 className="main-title">Favorite Artist Albums</h1>
      {error && <InvalidError /> }
      <AlbumList artistAlbumData={artistAlbumData} />
    </div>
  );
}

export default Homepage;
