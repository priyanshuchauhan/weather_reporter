## Live Demo:

https://priyanshuchauhan.github.io/optimum_assessment_weather/

## Assignment
Use react latest version (16.8) without any frontend ui framework. Use local state without any state management library (mobx or redux).
The data should be retrieved from OpenWeatherMap, a free api. Note that you will need to sign up for an API key from OpenWeatherMap in order to use it. Use the 5 day weather forecast API (https://openweathermap.org/forecast5).
The UI should be similar to the google weather widget. You can see an interactive example when you google for weather (eg. https://www.google.com.sg/search?q=singapore+weather).
Sections


## There are 3 sections in the widget.
1. "main forecast of the day" in the red box
2. "Temperature graph" in the blue box you don’t need to develop this.
3. “5 day forecast" in the green box

## Requirements
1. You may use the forecast at 1200 as the "main forecast of the day".
2. Clicking on any of days inside the "5 day forecast" will update the "main forecast of the day".
3. In addition, please add 2 filters on top of the widget. You can use whatever element that makes sense (dropdown, radio buttons, etc).
Filters:
4. City filter: include at least 5 cities of your choice. A new selection will re-fetch data from the endpoint and update the widget.
5. Upload your code to codesandbox and send us a link to your repository. Add clear instruction in Code.
6. UI should be responsive.
Bonus
7. Usage of react hooks.
8. Weather type filter contains only weather types from the data set
9. Displaying other available data points (humidity, pressure, etc) in an appropriate chart/graph


## API

### API key:
- Your API key is 4281f1dfc472741e8cb4a56f4ec88f88
- Please, always use your API key in each API call

### Endpoint:
- Please, use the endpoint api.openweathermap.org for your API calls
- Example of API call:
api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=4281f1dfc472741e8cb4a56f4ec88f88

### Useful links:
- API documentation https://openweathermap.org/api
- Details of your plan https://openweathermap.org/price