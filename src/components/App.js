import '../styles/App.css';
import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './LocationDetails';
import ForecastSummary from './ForecastSummary';

function App({ location, forecasts }) {
  const { city, country } = location;
  const {
    date, temperature, description, icon,
  } = forecasts;

  return (
    <div>
      <LocationDetails
        city={city}
        country={country}
      />
      <ForecastSummary
        date={date}
        temperature={temperature}
        description={description}
        icon={icon}
      />
    </div>
  );
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.number,
    description: PropTypes.string,
    icon: PropTypes.bool,
  }).isRequired,
};

export default App;
