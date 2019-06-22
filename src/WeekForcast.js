import React, { useState, useEffect } from "react";
import { weatherTypes, daysInWeek } from "./utils/constants";

/**
 * Function component to render one week forcast.
 * New API call would be made on day change.
 * @param {List} forcast prop with list for a week
 * @returns {Component} Week forcast component
 */
export default function WeekForcast({ forcast }) {
  const [currentDay, setCurrentDay] = useState("Monday");

  useEffect(() => {
    // API call
    console.log("##currentDay", currentDay);
  }, [currentDay]); // <-- change day from clicks

  if (!forcast) {
    return "Loading...";
  }

  return (
    <>
      <div>
        {daysInWeek.map((day, index) => (
          <span
            key={day}
            onClick={() => setCurrentDay(day)}
            className="forcast-section"
          >
            {day}
            {forcast[index] && (
              <img
                className="forcast-image"
                src={forcast[index].weatherIcon}
                alt={forcast[index].description}
              />
            )}
          </span>
        ))}
      </div>
    </>
  );
}
