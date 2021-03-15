import PropTypes from 'prop-types';
import React from 'react';
import notLiked from '../../assets/images/heart-gray.svg';
import liked from '../../assets/images/heart-red.svg';
import './Song.scss';

function Song({
  song, index, status, updateLikeState,
}) {
  return (
    <div className={`song-card ${(index % 2 === 0) ? 'light-grey' : 'dark-grey'}`}>
      <img src={song.albumArtUrl} alt="noImage" className="song-img" />
      <div className="card-bottom">
        <div className="right-side">
          <p>{song.genre.name}</p>
          <strong>{song.artist.name}</strong>
        </div>
        <div className="left-side">
          <div>
            <button type="button" onClick={updateLikeState}>
              {status.data.like ? <img src={liked} alt="liked" />
                : <img src={notLiked} alt="not liked" /> }
              <p>{status.data.count}</p>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Song;

Song.propTypes = {
  song: PropTypes.shape({
    genre: PropTypes.shape().isRequired,
    albumArtUrl: PropTypes.string.isRequired,
    artist: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  status: PropTypes.shape({
    data: PropTypes.shape({
      like: PropTypes.bool.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  updateLikeState: PropTypes.func.isRequired,
};
