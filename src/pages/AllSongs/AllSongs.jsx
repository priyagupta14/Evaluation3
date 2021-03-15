/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import genreIcon from '../../assets/images/icon-genre.svg';
import Song from '../../components/Song/Song';
import './AllSongs.scss';

function AllSongs({ allSongs }) {
  return (
    <div className="allSongs">
      <header>
        <h1>all songs</h1>
        <Link to="/categoriedByGenre">
          <button type="button">
            <img src={genreIcon} alt="genreIcon" />
          </button>
        </Link>
      </header>

      <div className="all-song-cards">
        {
          allSongs.map((eachSong, index) => (
            <Song
              key={eachSong.id}
              song={eachSong}
              index={index}
              status={eachSong.status}
            />
          ))
      }
      </div>

    </div>
  );
}

export default AllSongs;
AllSongs.propTypes = {
  allSongs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  // allLikeStatus: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     like: PropTypes.bool.isRequired,
  //     count: PropTypes.number.isRequired,
  //   }),
  // ).isRequired,
};
