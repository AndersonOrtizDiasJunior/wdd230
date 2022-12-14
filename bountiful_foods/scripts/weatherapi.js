const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weatherIcon');
const minMaxTemp = document.querySelector('#minMaxTemp');
const humidity = document.querySelector("#humidity")
const descriptionLabel = document.querySelector("#description");
const API_key = '2647c7d72b6bd5c75dbfb3353f6b16be';
const city_name = "Carlsbad";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city_name}&appid=${API_key}&units=imperial`;
const current_day = new Date().getDay();
const weekdayLabel = document.querySelector('#weekday')
const forecast = document.querySelector('#forecast')
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setCurrentData(data.list[0]);
        next_3_weathers = [data.list[8],data.list[16],data.list[24]]
        day = current_day+1
        next_3_weathers.forEach( weather => {
          setForecast(weather,day)
          day += 1
        })
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  function setCurrentData(weatherData) {
    document.querySelector("#mainWeather").style.display = "block"
    document.querySelector(".loading").style.display = "none"
    weekdayLabel.textContent = getWeekDay(current_day)
    weather = weatherData.weather[0]
    main = weatherData.main
    currentTemp.textContent = `${main.temp}ºF`
    const iconsrc = `https://openweathermap.org/img/w/${weather.icon}.png`;
    minMaxTemp.textContent = `min: ${main.temp_min} / max: ${main.temp_max}`
    humidity.textContent = `${main.humidity}% humidity`
    weatherIcon.src = iconsrc
    descriptionLabel.textContent = weather.description;
  }

  function setForecast(weather, day) {
      div = document.createElement("div")
      div.className = "forecastDiv"
  
      dayLabel = document.createElement("span")
      dayLabel.textContent = getWeekDay(day)
      dayLabel.className = "forecastDay"
      div.appendChild(dayLabel)

      icon = document.createElement("img")
      icon.src = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
      icon.alt = "weather icon"
      icon.className = "forecastIcon"
      div.appendChild(icon)

      temps = document.createElement("p")
      temps.textContent = `${weather.main.temp_min}ºF / ${weather.main.temp_max}ºF`
      temps.className = "forecastDescription"
      div.appendChild(temps)

      forecast.appendChild(div)
  }

  function getWeekDay(day) {
    switch (day) {
      case 0:
        return 'Sun'
      break;
      case 1:
        return 'Mon'
      case 2:
        return 'Tue'
      case 3:
        return 'Wed' 
      case 4:
        return 'Thu'  
      case 5:
        return 'Fri'       
      case 6:
        return 'Sat'    
    }
  }


  apiFetch();