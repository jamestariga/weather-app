# Weather App

This weather app is built in vanilla JavaScript that utilizes the openweathermap API.

## API

Get your api key [here](https://openweathermap.org/)

## Images

The images for this project is from [icon8](https://icons8.com/icon/set/weather/fluency).

## Stack

- JavaScript
- Node.js
- CSS
- HTML
- Axios
- Moment.js

## Installation

For this project, Node.js and npm / Yarn has to be installed in your machine.

```
npm init
npm i axios
```

Once you obtain your API key, make a separate js file and add:

```
const API = {
    key: 'YOUR_API_KEY'
}

export { API }
```

## Current Features

- Responsive
- Provides current weather
- Provides six days weather forecast with icons from openweathermap

## Future Improvements

- Mobile ready
- Add current time
- Add hourly data
- Host the application via Heroku
