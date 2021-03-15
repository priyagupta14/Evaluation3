/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import allSongs from '../../assets/images/icon-grid.svg';
import Song from '../../components/Song/Song';
import './CategorizedSong.scss';

const CategorizedSong = ({ songs, updateLikeState }) => {
  console.log(songs);
  return (
    <div className="categorizedSong">
      <header>
        <h1>genres</h1>
        <Link to="/allSongs">
          <button type="button">
            <img src={allSongs} alt="" />
          </button>
        </Link>

      </header>
      {Object.keys(songs).map((eachSong) => (
        <div key={eachSong}>
          <h1>{eachSong}</h1>
          <div className="all-song-cards">
            {songs[eachSong].map((song, index) => (
              <Song
                key={song.id}
                song={song}
                index={index}
                status={song.status}
                updateLikeState={() => updateLikeState(song.id, !song.status.data.like)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorizedSong;
