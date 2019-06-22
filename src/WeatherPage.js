import React, { useState, useEffect } from "react";
import * as weatherTypesImages from "./assets";

const weatherTypes = [
  "partlyCloudy",
  "rainLight",
  "rainAndCloudy",
  "sunny",
  "thunderStorms"
];

const cityList = ["Singapore", "Pune", "Moscow", "Dehradun", "Hong Kong"];

function WeatherPage() {
  const [cityName, setCityName] = useState(cityList[0]);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weatherType, setWeatherType] = useState(weatherTypes[0]);
  const [forcast, setForcastWeather] = useState(null);
  const count = 5;
  const tempUnit = "metric";
  const appID = "4281f1dfc472741e8cb4a56f4ec88f88";

  const handleCityChange = event => {
    const selectedCity = event.target.value;
    setCityName(selectedCity);
  };

/*
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=${count}&units=${tempUnit}&appid=${appID}`
    )
      .then(results => results.json())
      .then(data => {
        if (!data || data.cod !== "200") {
          return;
        }
        const weatherList = data.list.map(dataInstance => dataInstance.main);
        setCurrentWeather(weatherList[0]);
        setForcastWeather(weatherList);
      });
  }, [cityName]); // <-- change cities from dropdown
*/

  return (
    <>
      <select onChange={handleCityChange} className="dropdown">
        {cityList.map(city => (
          <option value={city} key={city}>
            {city}
          </option>
        ))}
      </select>
      <img src={weatherTypesImages[weatherType]} alt="partlyCloudy" />
      Temparature:{" "}
      {!currentWeather || !forcast ? "Loading..." : `${currentWeather.temp}`}
      <div className="">{cityName}</div>
      <div className="">Wednesday, 1:00 am</div>
      <div>
        <span className="">Mostly Cloudy</span>
      </div>
      <div>
        Precipitation: <span>0%</span>
      </div>
    </>
  );
}

export default WeatherPage;
