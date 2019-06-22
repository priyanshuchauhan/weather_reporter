import React, { useState, useEffect } from "react";
import "./styles/App.css";
import WeatherToday from "./components/WeatherToday";
import WeekForcast from "./components/WeekForcast";
import CityDropdown from "./components/CityDropdown";
import getWeatherReport from "./utils/apiUtil";

function App() {
  const [cityName, setCityName] = useState("Singapore");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forcast, setForCastWeather] = useState(null);

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

        {currentWeather && forcast && (
          <>
            <CityDropdown
              handleCityChange={selectedCity => setCityName(selectedCity)}
            />
            <WeatherToday currentWeather={currentWeather} cityName={cityName} />
            <br />
            <WeekForcast forcast={forcast} />
          </>
        )}
      </header>
    </div>
  );
}

export default App;
