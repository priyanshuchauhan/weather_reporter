import React from "react";
import { cityList } from "../utils/constants";

/**
 * Function component to render today's weather information.
 * @param {Function} handleCityChange callback function to update city
 * @returns {Component} Dropdown to select city
 */
export default function WeatherToday({ handleCityChange }) {
  if (!handleCityChange) {
    return "Loading...";
  }

  return (
      <div className="dropdown-wrapper">
      <label for="city-dropdown" className="city-dropdown-label">Select City</label>
      <select
        id="city-dropdown"
        onChange={e => handleCityChange(e.target.value)}
        className="dropdown"
      >
        {cityList.map(city => (
          <option value={city} key={city}>
            {city}
          </option>
        ))}
      </select>
      </div>
  );
}
