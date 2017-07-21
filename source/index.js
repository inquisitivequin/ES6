import './style.css';
import * as ELS from './elms';
import {Http} from '../external/http';
import {WeatherData, WEATHER_PROXY_HANDLER} from '../external/weather-data'


const apId = '0bd48a326627df68607a14e013e4384b';

ELS.EL_SRCH_BTN.addEventListener('click', searchWeath)

function searchWeath() {
	const CITY_NAME = ELS.EL_SRCH_CITY.value.trim()
	if (CITY_NAME.length == 0) {
		return alert('Enter a city name fool!')
	}
	const URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + CITY_NAME + '&units=metric&appid=apId'
	Http.fetchData(URL)
		.then(responseData => {
			const WEATHER_DATA = new WeatherData(CITY_NAME, responseData.weather[0].description.toUpperCase())
			const WEATHER_PROXY = new Proxy(WEATHER_DATA, WEATHER_PROXY_HANDLER)
			WEATHER_PROXY.temperature = responseData.main.temp
			updateWeather(WEATHER_PROXY)
		})
		.catch(error => alert(error))
}

function updateWeather(weatherData) {
	ELS.EL_WEAT_CITY.textContent = weatherData.cityName
	ELS.EL_WEAT_TEMP.textContent = weatherData.temp
	ELS.EL_WEAT_DESC.textContent = weatherData.desc

	ELS.EL_WEATHER.style.display = 'block'
}