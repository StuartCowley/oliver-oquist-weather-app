import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './LocationDetails';
import ForecastSummaries from './ForecastSummaries';
import ForecastDetails from './ForecastDetails';

import '../styles/App.css';

function App({ location, forecasts }) {
  return (
    <div className="weather-app">
      <p>Weather App</p>
      <LocationDetails
        city={location.city}
        country={location.country}
      />
      <ForecastSummaries forecasts={forecasts} />
      <ForecastDetails forecasts={forecasts[0]} />
    </div>
  );
}

App.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    }),
  ).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  wind: PropTypes.shape({
    speed: PropTypes.number,
    direction: PropTypes.string,
  }).isRequired,
};

export default App;
