chillLabel = document.querySelectorAll(".windChill")
speedContainer = document.querySelector(".windSpeed")
speed = Number(speedContainer.textContent)
temperatureContainer = document.querySelector(".temperatureValue")
temperature = Number(temperatureContainer.textContent)
speedContainer.addEventListener('update', displayWindchill)
temperatureContainer.addEventListener('update', displayWindchill)
function displayWindchill() {
    if (isChillCalculable(temperature, speed)) {
        chillLabel.array.forEach(label => {
            label.textContent = calculateWindChill(temperature, speed)
        });
    }
}

function calculateWindChill(temperature, speed) {
    chill = 35.74 + 0.6215 * temperature - 35.75 * speed ** 0.16 + 0.4275* temperature * speed ** 0.16
    return chill.toFixed(2)
}

function isChillCalculable(temperature, speed) {
    return temperature<=50 && speed >3
}