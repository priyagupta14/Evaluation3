import PropTypes from 'prop-types';
import React from 'react';
import Song from '../../components/Song/Song';
import './AllSongs.scss';

function AllSongs({ allSongs }) {
  return (
    <div className="allSongs">
      <h1>all songs</h1>
      <div className="all-song-cards">
        {
          allSongs.map((eachSong) => <Song key={eachSong.id} song={eachSong} />)
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
};
