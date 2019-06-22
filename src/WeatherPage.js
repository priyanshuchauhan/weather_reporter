import React, { useState, useEffect } from "react";
import WeekForcast from "./WeekForcast";
import getWeatherReport from "./utils/apiUtil";
import { cityList } from "./utils/constants";


const initialWeather = {
  description: "Clouds",
  humidity: 79,
  pressure: 1007.15,
  temperature: 22.15,
  tempMax: 26.79,
  tempMin: 22.15,
  windSpeed: 1.89,
  weatherIcon: "04n"
};

function WeatherPage() {
  const [cityName, setCityName] = useState(cityList[0]);
  const [currentWeather, setCurrentWeather] = useState(initialWeather);
  const [forcast, setForcastWeather] = useState(null);

  const handleCityChange = event => {
    const selectedCity = event.target.value;
    setCityName(selectedCity);
  };

  useEffect(() => {
    getWeatherReport(cityName).then(weatherList => {
      setCurrentWeather(weatherList[0]);
      setForcastWeather(weatherList);
    });
  }, [cityName]);

  if (!currentWeather && !forcast) {
    return "Loading...";
  }

  return (
    <>
      <select onChange={handleCityChange} className="dropdown">
        {cityList.map(city => (
          <option value={city} key={city}>
            {city}
          </option>
        ))}
      </select>
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

      <WeekForcast forcast={forcast}/>
    </>
  );
}

export default WeatherPage;
