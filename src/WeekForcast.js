import React, { useState, useEffect } from "react";
import * as weatherTypesImages from "./assets";

const weatherTypes = [
  "partlyCloudy",
  "rainLight",
  "rainAndCloudy",
  "sunny",
  "thunderStorms"
];

const daysInWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

function WeekForcast() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentDay, setCurrentDay] = useState("Monday");
  const [weatherType, setWeatherType] = useState(weatherTypes[2]);
  const [forcast, setForcastWeather] = useState(null);

  const handleDayChange = event => {
    const selectedCity = event.target.value;
    setCurrentDay(selectedCity);
  };
  useEffect(() => {
    // API call
    console.log("##currentDay", currentDay);
  }, [currentDay]); // <-- change day from clicks

  return (
    <>
      <div>
        {daysInWeek.map((day, index) => (
          <span>
            {day}
            <img
              className="forcast-image"
              src={weatherTypesImages[weatherTypes[index]]}
              alt="partlyCloudy"
            />
          </span>
        ))}
      </div>
    </>
  );
}

export default WeekForcast;
