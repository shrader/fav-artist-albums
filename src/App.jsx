import React, { useState, useEffect } from 'react';
import './App.css';
import Homepage from './Homepage';
import Api from './Api';
import Loading from './Loading';

function App() {
  // defualt to be used as my 'favorite artist' don't know if I'd say favorite but I enjoy them
  const DEFAULT_ARTIST = 'Imagine Dragons';
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ set: false, type: '' });
  const [currArtist, setCurrArtist] = useState(DEFAULT_ARTIST);
  const [artistAlbumData, setArtistAlbumData] = useState();

  // call getAlbums from the Api, set state for albumsData and isLoading
  async function getAlbumData(artist) {
    let albumsData;
    setIsLoading(true);
    try {
      albumsData = await Api.getAlbums(artist);
    } catch (e) {
      setError({ set: true, type: 'api' });
    }
    // if the results arr is empty the Api either couldn't find albums for the artist
    // or it was a bad request so show an error, otherwise change the state accordingly
    if (albumsData !== undefined) {
      if (albumsData.results.length !== 0) {
        setArtistAlbumData(albumsData);
        setError(false);
      } else {
        setError({ set: true, type: 'data' });
      }
    }
    setIsLoading(false);
  }

  useEffect(() => {
    // try catch w/ error handling
    getAlbumData(currArtist);
  }, [currArtist]);

  // display loading screen until Api call is fulfilled or rejected
  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <Homepage artistAlbumData={artistAlbumData} setCurrArtist={setCurrArtist} error={error} />
  );
}

export default App;
