import React from 'react';
import './AlbumDetails.css';
import formatDate from './helperFunctions';

function AlbumDetails({ albumData }) {
  return (
    <div className="album-section">
      <div className="card mb-3">
        <a href={albumData.collectionViewUrl} className="title-link">
          <h3 className="card-header">{albumData.collectionName}</h3>
        </a>
        <div className="card-body">
          <h5 className="card-title">{albumData.artistName}</h5>
        </div>
        <div className="card-body">
          <img alt={`album art for ${albumData.collectionName}`} src={albumData.artworkUrl100} />
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{`Genre: ${albumData.primaryGenreName}`}</li>
          <li className="list-group-item">
            {`Release Date: ${formatDate(albumData.releaseDate)}`}
          </li>
        </ul>
        <div className="card-footer text-muted">
          {albumData.copyright}
        </div>
      </div>
    </div>
  );
}

export default AlbumDetails;
