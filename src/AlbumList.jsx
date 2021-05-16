import React from 'react';
import AlbumDetails from './AlbumDetails';
import './AlbumList.css';

function AlbumList({ artistAlbumData }) {
  // for each album in the results render AlbumDetails component and pass relevant data in props
  return (
    <div className="container ">
      {artistAlbumData.results.map((album) => (
        <AlbumDetails key={album.collectionId} albumData={album} />
      ))}
    </div>
  );
}

export default AlbumList;
