/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */ // proptypes of map(js hof)
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import bollywood from '../../assets/images/genre-bollywood.png';
import country from '../../assets/images/genre-country.png';
import pop from '../../assets/images/genre-pop.png';
import rock from '../../assets/images/genre-rock.png';
import allSongs from '../../assets/images/icon-grid.svg';
import Song from '../../components/Song/Song';
import './CategorizedSong.scss';

const imgArr = [{ name: 'Bollywood', link: bollywood }, { name: 'Country', link: country }, { name: 'Pop', link: pop }, { name: 'Rock', link: rock }];
const CategorizedSong = ({ songs, updateLikeState }) => (
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
      <div key={eachSong} className="groupByGenre">
        <h1>{eachSong}</h1>
        {imgArr.map((genre) => ((genre.name === eachSong) ? <img src={genre.link} alt="genre" key={genre.name} /> : ''))}
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

export default CategorizedSong;

CategorizedSong.propTypes = {
  songs: PropTypes.shape(
    PropTypes.arrayOf({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,

  updateLikeState: PropTypes.func.isRequired,
};
