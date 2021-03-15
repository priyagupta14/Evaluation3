/* eslint-disable react/prop-types */
import React from 'react';
import Song from '../../components/Song/Song';

const CategorizedSong = ({ songs }) => {
  console.log(songs);
  return (
    <div>
      {Object.keys(songs).map((eachSong) => (
        <div key={eachSong}>
          <h1>{eachSong}</h1>
          <div className="idk">
            {songs[eachSong].map((song, index) => (
              <Song
                key={song.id}
                song={song}
                index={index}
                status={song.status}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorizedSong;
