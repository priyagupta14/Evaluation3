/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import AllSongs from './pages/AllSongs/AllSongs';
import LandingPage from './pages/LandingPage/LandingPage';
import apiUtils from './utils/api/api';

const App = () => {
  const [allSongs, setAllSongs] = useState([]);
  const [allLikeStatus, setAllLikeStatus] = useState([]);
  const [songDetails, setSongDetails] = useState([]);
  const getAllSongs = async () => {
    const { data } = await apiUtils.getAllSongs();
    setAllSongs(data);
    console.log(data);
    let likeStatusOfSongs = data.map((eachSong) => apiUtils.getLikeStatus(eachSong.id));
    likeStatusOfSongs = await Promise.all(likeStatusOfSongs);
    setAllLikeStatus(likeStatusOfSongs);
    console.log(likeStatusOfSongs);
  };
  useEffect(async () => {
    const concatSongLikes = allSongs.map(
      (song, index) => ({ ...song, status: allLikeStatus[index] }),
    );
    setSongDetails(concatSongLikes);
    console.log(concatSongLikes);
  }, [allLikeStatus]);
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <LandingPage getAllSongs={getAllSongs} />
        </Route>
        <Route path="/allSongs">
          <AllSongs allSongs={songDetails} />
          {/* // allLikeStatus={allLikeStatus} */}
        </Route>
        <Route path="/categoriedByGenre">
          {/* <CategorizedSongs songs={categorizedByGenre(allSongs)} /> */}
        </Route>
      </Switch>
    </div>
  );
};

export default App;
