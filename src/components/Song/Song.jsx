/* eslint-disable react/prop-types */
import React from 'react';
import notLiked from '../../assets/images/heart-gray.svg';
import liked from '../../assets/images/heart-red.svg';
import './Song.scss';

function Song({ song, index, status }) {
  return (
    <div className={`song-card ${(index % 2 === 0) ? 'light-grey' : 'dark-grey'}`}>
      <img src={song.albumArtUrl} alt="noImage" />
      <div className="card-bottom">
        <div className="right-side">
          <p>{song.genre.name}</p>
          <p>{song.artist.name}</p>
        </div>
        <div className="left-side">
          {status.data.like ? (
            <div>
              <img src={liked} alt="liked" />
              <p>{status.data.count}</p>
            </div>
          ) : (
            <div>
              <img src={notLiked} alt="not liked" />
              <p>{status.data.count}</p>
            </div>
          ) }
        </div>

      </div>

    </div>
  );
}

export default Song;
