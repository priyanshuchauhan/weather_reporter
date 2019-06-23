import mockData from "./mockAPIData";
import assert from "assert";
import { getWeatherReportDI } from "./apiUtil";

describe("getWeatherReport api test", () => {
  it("calls fetch with the correct url", () => {
    const fakeFetch = url => {
      assert(
        url.indexOf(
          "https://api.openweathermap.org/data/2.5/forecast?q=Singapore&units=metric"
        ) > -1
      );
      return new Promise(function(resolve) {});
    };
    getWeatherReportDI(fakeFetch, "Singapore");
  });

  it("parses the response of fetch correctly", done => {
    const fakeFetch = () => {
      return Promise.resolve({
        json: () => Promise.resolve(mockData)
      });
    };
    getWeatherReportDI(fakeFetch, "Singapore").then(weatherList => {
      assert(weatherList.length === 6);
      assert(weatherList[0].description === "Rain");
      assert(weatherList[0].humidity === 68);
      assert(weatherList[0].tempMax === 30);
      assert(weatherList[0].tempMin === 29);
      assert(weatherList[0].windSpeed === 3.09);
      done();
    });
  });
});
