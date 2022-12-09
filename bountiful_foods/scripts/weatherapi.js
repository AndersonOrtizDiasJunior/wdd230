const currentTemp = document.querySelectorAll('.temperatureValue');
const weatherIcon = document.querySelectorAll('.weatherIcon');
const captionDesc = document.querySelectorAll('.sky');
const windSpeed = document.querySelectorAll(".windSpeed")
const API_key = '2647c7d72b6bd5c75dbfb3353f6b16be'
const city_name = "Fairbanks"
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}&units=imperial`


async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
        displayWindchill()
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  function displayResults(weatherData) {
    currentTemp.forEach(temp => {
      temp.textContent = weatherData.main.temp.toFixed(0);
    })
    
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.forEach(icon => {
      icon.setAttribute('src', iconsrc);
      icon.setAttribute('alt', desc);
    })
    captionDesc.forEach(sky => {
      sky.textContent = desc;
    })
    windSpeed.forEach(speed => {
      speed.textContent = weatherData.wind.speed
    })
  }
  apiFetch();