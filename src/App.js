import React, { useState, useEffect } from "react";
import "./styles/App.css";
import WeatherPage from "./WeatherPage";
import WeatherToday from "./WeatherToday";
import WeekForcast from "./WeekForcast";
import getWeatherReport from "./utils/apiUtil";
import { cityList } from "./utils/constants";

function App() {
  const [cityName, setCityName] = useState(cityList[0]);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forcast, setForCastWeather] = useState(null);

  const handleCityChange = event => {
    const selectedCity = event.target.value;
    setCityName(selectedCity);
  };

  useEffect(() => {
    getWeatherReport(cityName).then(weatherList => {
      setCurrentWeather(weatherList[0]);
      setForCastWeather(weatherList);
    });
  }, [cityName]);

  return (
    <div className="App">
      <header className="App-header">
        {(!currentWeather || !forcast) && "Loading..."}
        <select onChange={handleCityChange} className="dropdown">
          {cityList.map(city => (
            <option value={city} key={city}>
              {city}
            </option>
          ))}
        </select>
        <WeatherToday currentWeather={currentWeather} cityName={cityName} />
        <br />
        <br />
        <WeekForcast forcast={forcast} />
      </header>
    </div>
  );
}

export default App;
