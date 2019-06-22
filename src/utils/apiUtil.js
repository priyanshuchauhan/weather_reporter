import {
  apiCityCount,
  tempUnit,
  appID,
  apiRootURL,
  weatherIconURL
} from "./constants";

// TODO: cache
function getWeatherReport(cityName) {
  const url = new URL(apiRootURL);
  url.searchParams.append("q", cityName);
  url.searchParams.append("cnt", apiCityCount);
  url.searchParams.append("units", tempUnit);
  url.searchParams.append("appid", appID);

  const weatherList = fetch(url.href)
    .then(results => results.json())
    .then(data => {
      if (!data || data.cod !== "200") {
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
      console.log("##weatherListResponse", weatherListResponse);
      return weatherListResponse;
    });
  return weatherList;
}

export default getWeatherReport;
