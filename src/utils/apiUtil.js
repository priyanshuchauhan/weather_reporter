import { tempUnit, appID, apiRootURL, weatherIconURL } from "./constants";

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
  url.searchParams.append("units", tempUnit);
  url.searchParams.append("appid", appID);

  const stored = sessionStorage[cityName];
  if (stored) {
    return Promise.resolve(JSON.parse(stored));
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

        const formattedResponse = {
          date: weatherDate,
          humidity: dataInstance.main.humidity,
          pressure: dataInstance.main.pressure,
          temperature: dataInstance.main.temp,
          tempMax: dataInstance.main.temp_max,
          tempMin: dataInstance.main.temp_min,
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

export default getWeatherReport;
