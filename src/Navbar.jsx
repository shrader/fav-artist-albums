import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ artistName, artistLink, setCurrArtist }) {
  const [inputValue, setInputValue] = useState('');

  // update input state as user writes in form
  function handleChange(e) {
    const { value } = e.target;
    setInputValue(value);
  }

  // set the currArtist to what was submitted in the input then clear the input
  function handleSubmit(e) {
    e.preventDefault();
    const { value } = document.getElementById('artist-input');
    setCurrArtist(value);
    e.target.value = '';
  }

  return (
    <div className="main-navbar-div">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <h4>
            <a className="nav-link active" href={artistLink}>{artistName}</a>
          </h4>
          <div className="d-flex">
            <input className="me-sm-2 nav-form" id="artist-input" name="name" value={inputValue} onChange={handleChange} type="text" placeholder="Artist Name" />
            <button type="button" onClick={handleSubmit} className="btn btn-success nav-form">Change Artist</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
