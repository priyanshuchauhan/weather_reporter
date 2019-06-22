import React from "react";

/**
 * Function component to render today's weather information.
 * @param {Object} currentWeather basic information
 * @param {String} cityName prop
 * @returns {Component} Week forcast component
 */
export default function WeatherToday({ currentWeather, cityName }) {
  if (!currentWeather) {
    return "Loading...";
  }

  return (
    <>
      <img src={currentWeather.weatherIcon} alt={currentWeather.description} />
      <div className="">Wednesday, 1:00 am</div>
      Temparature: {currentWeather.temperature}
      <div className="">{cityName}</div>
      <div>
        <span className="">{currentWeather.temperature}</span>
      </div>
      <div>
        It's: <span>{currentWeather.description}</span>
      </div>
      <div>
        Humidity: <span>{currentWeather.humidity}</span>
      </div>
      <div>
        WindSpeed: <span>{currentWeather.windSpeed}</span>
      </div>
    </>
  );
}
