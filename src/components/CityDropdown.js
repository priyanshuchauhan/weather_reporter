import React from "react";
import PropTypes from 'prop-types';
import { cityList } from "../utils/constants";

/**
 * Function component to render today's weather information.
 * @param {Function} handleCityChange callback function to update city
 * @returns {Component} Dropdown to select city
 */
function CityDropdown({ handleCityChange }) {
  if (!handleCityChange) {
    return "Loading...";
  }

  return (
      <div className="dropdown-wrapper">
      <label htmlFor="city-dropdown" className="city-dropdown-label">Select City</label>
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

CityDropdown.propTypes = {
  handleCityChange: PropTypes.func.isRequired
}

export default CityDropdown;