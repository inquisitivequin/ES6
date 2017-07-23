import './style.css';
import * as ELS from './elms';
import {Http} from '../external/http';
import {WeatherData, WEATHER_PROXY_HANDLER} from '../external/weather-data'


const apId = '';

ELS.EL_SRCH_BTN.addEventListener('click', searchWeath)

function searchWeath() {
	const CITY_NAME = ELS.EL_SRCH_CITY.value.trim()
	if (CITY_NAME.length == 0) {
		return alert('Enter a city name fool!')
	}
	ELS.EL_LOADING.style.display = 'block'
	ELS.EL_WEATHER.style.display = 'none'
	const URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + CITY_NAME 
					+ '&units=metric&appid=0bd48a326627df68607a14e013e4384b'
	Http.fetchData(URL)
		.then(responseData => {
			const WEATHER_DATA = new WeatherData(CITY_NAME, responseData.weather[0]
				.description.toUpperCase())
			const WEATHER_PROXY = new Proxy(WEATHER_DATA, WEATHER_PROXY_HANDLER)
			WEATHER_PROXY.temp = responseData.main.temp
			updateWeather(WEATHER_PROXY)
		})
		.catch(error => alert(error))
}

function updateWeather(weatherData) {
	console.log(weatherData.temp)
	ELS.EL_WEATH_CITY.textContent = weatherData.cityName
	ELS.EL_WEATH_TEMP.textContent = weatherData.temp
	ELS.EL_WEATH_DESC.textContent = weatherData.desc

	ELS.EL_LOADING.style.display = 'none'
	ELS.EL_WEATHER.style.display = 'block'
}