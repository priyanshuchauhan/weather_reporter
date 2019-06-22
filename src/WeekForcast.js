import React, { useState, useEffect } from "react";
import * as weatherTypesImages from "./assets";
import {
  weatherTypes,
  daysInWeek,
} from "./utils/constants";

function WeekForcast(forcast) {
  const [currentDay, setCurrentDay] = useState("Monday");


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
          <span key={day}>
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
