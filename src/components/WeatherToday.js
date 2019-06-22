import React from "react";
import PropTypes from 'prop-types';

/**
 * Function component to render today's weather information.
 * @param {Object} currentWeather basic information
 * @param {String} cityName prop
 * @returns {Component} Week forcast component
 */
function WeatherToday({ currentWeather, cityName }) {
  if (!currentWeather) {
    return "Loading...";
  }

  return (
    <>
      <div className="city-name">{cityName}</div>
      <div className="">{currentWeather.dayNameFull}, 12:00 am</div>
      <div className="">{currentWeather.description}</div>

      <div className="today-main-content">
        <div className="weather-image-parent">
          <img
            src={currentWeather.weatherIcon}
            alt={currentWeather.description}
          />
          <span className="today-temparature">
            {currentWeather.temperature}
          </span>
          <span>°C</span>
        </div>
        <div className="additional-info">
          <div>
            Humidity: <span>{currentWeather.humidity}%</span>
          </div>
          <div>
            Pressure: <span>{currentWeather.pressure}mb</span>
          </div>
          <div>
            Wind: <span>{currentWeather.windSpeed}km/hr</span>
          </div>
        </div>
      </div>
    </>
  );
}

WeatherToday.propTypes = {
  currentWeather: PropTypes.object.isRequired,
  cityName: PropTypes.string.isRequired
}

export default WeatherToday;