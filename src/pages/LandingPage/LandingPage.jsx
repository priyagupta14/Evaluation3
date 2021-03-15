import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss';

const LandingPage = ({ getAllSongs }) => (
  <div className="landingPage">
    <p>
      :(( seems a bit empty
    </p>
    <Link to="/allSongs">
      <button type="button" onClick={getAllSongs}>Sync</button>
    </Link>

  </div>
);

export default LandingPage;
LandingPage.propTypes = {
  getAllSongs: PropTypes.func.isRequired,
};
