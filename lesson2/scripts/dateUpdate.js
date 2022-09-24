let yearSpan = document.querySelector("#year")
let currentYear = new Date().getFullYear()
yearSpan.textContent = `© ${currentYear} | Anderson Ortiz Dias Junior | `

let updateSpan = document.querySelector("#lastModfied")
updateSpan.textContent  = `Last updated ${document.lastModified} (UTC-3)`