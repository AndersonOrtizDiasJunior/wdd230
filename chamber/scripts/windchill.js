chillLabel = document.querySelector("#windChill")
speed = Number(document.querySelector("#windSpeed").textContent)
temperature = Number(document.querySelector("#temperatureValue").textContent)
if (isChillCalculable(temperature, speed)) {
    chillLabel.textContent = calculateWindChill(temperature, speed)}

chillLabel = document.querySelector("#windChillLarge")
speed = Number(document.querySelector("#windSpeedLarge").textContent)
temperature = Number(document.querySelector("#temperatureValueLarge").textContent)
if (isChillCalculable(temperature, speed)) {
    chillLabel.textContent = calculateWindChill(temperature, speed)}

function calculateWindChill(temperature, speed) {
    chill = 35.74 + 0.6215 * temperature - 35.75 * speed ** 0.16 + 0.4275* temperature * speed ** 0.16
    return chill.toFixed(2)
}

function isChillCalculable(temperature, speed) {
    return temperature<=50 && speed >3
}