import {
  tempUnit,
  appID,
  apiRootURL,
  weatherIconURL,
  daysInWeek,
  daysInWeekShortHand
} from "./constants";

/**
 * Factory function to inject fetch dependency for testing
 *
 * @param {String} cityName example "London"
 * @returns {Promise} Either API call promise or localstore wrapped promise
 */
export default function getWeatherReport(cityName) {
  return getWeatherReportDI(fetch, cityName);
}

/**
 * Function to make async call to get weather details for the provided city
 * Caching: In case the API has alreay been called for the city
 * then localstorage data will be used
 *
 * @param {String} cityName example "London"
 * @param {function} fetch Dependency Injection for testing
 * @returns {Promise} Either API call promise or localstore wrapped promise
 */
export function getWeatherReportDI(fetch, cityName) {
  const url = new URL(apiRootURL);
  url.searchParams.append("q", cityName);
  url.searchParams.append("units", tempUnit);
  url.searchParams.append("appid", appID);

  const cachedData = sessionStorage[cityName];
  if (cachedData) {
    return Promise.resolve(JSON.parse(cachedData));
  }

  const weatherList = fetch(url.href)
    .then(results => results.json())
    .then(data => {
      if (!data) {
        return;
      }

      let weatherListResponse = {};
      data.list.forEach(dataInstance => {
        const utcSeconds = dataInstance.dt;
        const weatherDate = utcSeconds && new Date(utcSeconds * 1000);
        const weatherMeta = dataInstance.weather;

        const date = weatherDate.getDate();
        // Check to avoid adding multiple results for same date
        if (weatherListResponse[date]) {
          return;
        }

        const dayName = daysInWeekShortHand[weatherDate.getDay()];
        const dayNameFull = daysInWeek[weatherDate.getDay()];

        const formattedResponse = {
          date: weatherDate,
          dayName,
          dayNameFull,
          humidity: dataInstance.main.humidity,
          pressure: dataInstance.main.pressure,
          temperature: dataInstance.main.temp,
          tempMax: dataInstance.main.temp_max && Math.trunc(dataInstance.main.temp_max),
          tempMin: dataInstance.main.temp_min && Math.trunc(dataInstance.main.temp_min),
          windSpeed: dataInstance.wind.speed,
          description: weatherMeta && weatherMeta[0].main,
          weatherIcon: weatherMeta && weatherMeta[0].icon
        };
        formattedResponse.weatherIcon = `${weatherIconURL}${
          formattedResponse.weatherIcon
        }.png`;
        weatherListResponse[date] = formattedResponse;
      });
      weatherListResponse = Object.keys(weatherListResponse).map(
        date => weatherListResponse[date]
      );

      sessionStorage[cityName] = JSON.stringify(weatherListResponse);
      return weatherListResponse;
    });
  return weatherList;
}
