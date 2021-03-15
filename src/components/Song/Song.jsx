/* eslint-disable react/prop-types */
import React from 'react';
import './Song.scss';

function Song({ song }) {
  return (
    <div className="song-card">
      <img src={song.albumArtUrl} alt="noImage" />
      <p>{song.genre.name}</p>
      <p>{song.artist.name}</p>
    </div>
  );
}

export default Song;
