import {
  apiCityCount,
  tempUnit,
  appID,
  apiRootURL,
  weatherIconURL
} from "./constants";

/**
 * Function to make async call to get weather details for the provided city
 * Caching: In case the API has alreay been called for the city
 * then localstorage data will be used
 *  
 * @param {String} cityName example "London"
 * @returns {Promise} Either API call promise or localstore wrapped promise
 */
function getWeatherReport(cityName) {
  const url = new URL(apiRootURL);
  url.searchParams.append("q", cityName);
  url.searchParams.append("cnt", apiCityCount);
  url.searchParams.append("units", tempUnit);
  url.searchParams.append("appid", appID);

  const stored = localStorage[cityName];
  if (stored) {
    return Promise.resolve(JSON.parse(stored));
  }  

  const weatherList = fetch(url.href)
    .then(results => results.json())
    .then(data => {
      if (!data) {
        return;
      }

      const weatherListResponse = data.list.map(dataInstance => {
        const formattedResponse = {
          humidity: dataInstance.main.humidity,
          pressure: dataInstance.main.pressure,
          temperature: dataInstance.main.temp,
          tempMax: dataInstance.main.temp_max,
          tempMin: dataInstance.main.temp_min,
          windSpeed: dataInstance.wind.speed,
          description: dataInstance.weather && dataInstance.weather[0].main,
          weatherIcon: dataInstance.weather && dataInstance.weather[0].icon
        };
        formattedResponse.weatherIcon = `${weatherIconURL}${
          formattedResponse.weatherIcon
        }.png`;
        return formattedResponse;
      });
      localStorage[cityName] = JSON.stringify(weatherListResponse);
      return weatherListResponse;
    });
  return weatherList;
}

export default getWeatherReport;
