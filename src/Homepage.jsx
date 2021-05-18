import React from 'react';
import AlbumList from './AlbumList';
import Navbar from './Navbar';
import InvalidError from './InvalidError';
import ApiError from './ApiError';
import './Homepage.css';

function Homepage({ artistAlbumData, setCurrArtist, error }) {
  // get the artist name and link to apple music page from first album in the response
  let artistNameForTitle;
  let artistAplleMusicLink;
  if (artistAlbumData) {
    // if request was successful get artist name and link from first result
    artistNameForTitle = artistAlbumData.results[0].artistName;
    artistAplleMusicLink = artistAlbumData.results[0].artistViewUrl;
  } else {
    // Give vals default values if artistAlbumData is undefined
    artistNameForTitle = 'Artist Name';
    artistAplleMusicLink = '';
  }

  function errorCheck() {
    if (error) {
      return (error.type === 'api'
        ? <ApiError />
        : <InvalidError />);
    }
    return <AlbumList artistAlbumData={artistAlbumData} />;
  }

  return (
    <div>
      <Navbar
        artistName={artistNameForTitle}
        artistLink={artistAplleMusicLink}
        setCurrArtist={setCurrArtist}
      />
      <h1 className="main-title">Favorite Artist Albums</h1>
      {/* if error, render correct error component else render AlbumList */}
      {errorCheck()}
    </div>
  );
}

export default Homepage;
