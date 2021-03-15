/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import AllSongs from './pages/AllSongs/AllSongs';
import LandingPage from './pages/LandingPage/LandingPage';
import apiUtils from './utils/api/api';

const App = () => {
  const [allSongs, setAllSongs] = useState([]);

  const getAllSongs = async () => {
    const songs = await apiUtils.getAllSongs();
    setAllSongs(songs.data);
    console.log(songs.data);
  };
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <LandingPage getAllSongs={getAllSongs} />
        </Route>
        <Route path="/allSongs">
          <AllSongs allSongs={allSongs} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
