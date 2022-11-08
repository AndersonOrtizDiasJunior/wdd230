
let currentDate = new Date()
var lastVisit = window.localStorage.getItem("lastVisit")
if (lastVisit == null) {
    updateDaysH3(0)
} else {
    lastDate = new Date(lastVisit)
    let days = dayDiff(lastDate, currentDate)
    updateDaysH3(days)
}


function updateDaysH3(days) {
    var differenceString = `${days} days ago`
    var daysH3 = document.querySelector("#daysBetweenLast")
    daysH3.textContent = differenceString
    localStorage.setItem("lastVisit", currentDate)
}

function dayDiff(pastDate, currentDate) {
    diff = currentDate.getTime() - pastDate.getTime()
    days = Math.trunc(diff / (1000 * 3600 * 24))
    console.log(days)
    return days
}
