import React from "react";
import PropTypes from "prop-types";

import '../styles/ForecastDetails.css';

function ForecastDetails({ forecasts }) {
  const {
    temperature, date, humidity, wind,
  } = forecasts;

  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details">
      <div className="forecast-details__date">
        {formattedDate}
      </div>
      <div className="forecast-details__temperature">
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-details__temperature">
        {temperature.min}
        &deg;C
      </div>
      <div className="forecast-details__humidity">
        {humidity}
        %
      </div>
      <div className="forecast-details__speed">
        {wind.speed}
        mph
      </div>
      <div className="forecast-details__direction">
        {wind.direction}
      </div>
    </div>
  );
}

ForecastDetails.propTypes = {
  forecasts: PropTypes.shape({
    date: PropTypes.number,
    humidity: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ForecastDetails;
