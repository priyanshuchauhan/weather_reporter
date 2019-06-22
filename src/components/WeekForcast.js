import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

/**
 * Function component to render one week forcast.
 * New API call would be made on day change.
 * @param {List} forcast prop with list for a week
 * @returns {Component} Week forcast component
 */
function WeekForcast({ forcast, updateTodayWeather }) {
  const [currentDay, setCurrentDay] = useState("Monday");

  useEffect(() => {
    const newWeather = forcast.find(
      forcastInstance => forcastInstance.dayName === currentDay
    );
    newWeather && updateTodayWeather(newWeather);
  }, [forcast, updateTodayWeather, currentDay]);

  if (!forcast) {
    return "Loading...";
  }

  return (
    <div className="forcast-wrapper">
      {forcast.map(forcastInstance => (
        <span
          key={forcastInstance.dayName}
          onClick={() => setCurrentDay(forcastInstance.dayName)}
          className="forcast-section"
        >
          <span className="forcast-image-wrapper">
            <span className="forcast-day">{forcastInstance.dayName}</span>
            <img
              src={forcastInstance.weatherIcon}
              alt={forcastInstance.description}
            />
            <span>
                {forcastInstance.tempMax}° &nbsp;
                {forcastInstance.tempMin}°
            </span>
          </span>
        </span>
      ))}
    </div>
  );
}

WeekForcast.propTypes = {
  forcast: PropTypes.array.isRequired,
  updateTodayWeather: PropTypes.func.isRequired
}

export default WeekForcast;