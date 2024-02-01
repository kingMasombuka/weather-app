//onclick handler for button
import { APIKEY } from './files.js';
const citytosearch = document.getElementById('city');
const degrees = document.querySelector('.city-details h3');
const city = document.querySelector('.city-details h4');
const weatherImg = document.querySelector('.city-details img');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const imgElement = document.querySelector('.city-details img');

async function getWeather() {
    const cityToFind = citytosearch.value || "Manzini"
	const response = await fetch(
		`http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${cityToFind}`
	);
    const weatherData = await response.json()
    console.log(weatherData)
    degrees.innerHTML=parseInt(weatherData.current.feelslike_c)+"°C"
    humidity.innerHTML=weatherData.current.humidity+"%"
    windSpeed.innerHTML=weatherData.current.wind_kph+"km/h"
    city.innerHTML=weatherData.location.name
} 
getWeather()
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    clockElement.textContent = timeString;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  