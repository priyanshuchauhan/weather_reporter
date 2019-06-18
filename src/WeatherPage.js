import React, { useState, useEffect } from "react";

function WeatherPage() {
  const [cityName, setCityName] = useState('Singapore');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forcast, setForcastWeather] = useState(null);

  const dropdown = () => {
    setCityName("Delhi");
  }

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=5&appid=4281f1dfc472741e8cb4a56f4ec88f88`
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

  return (
    <>
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
