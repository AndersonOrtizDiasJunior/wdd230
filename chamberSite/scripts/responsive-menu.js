function weekDay() {
    var date = new Date();
    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
   return weekdays[date.getDay()];
}


const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

const today = document.querySelector(".today")
let unformatedDate = new Date();
let month = unformatedDate.toLocaleString('default', { month: 'long' })
today.textContent = `${weekDay()}, ${unformatedDate.getDate()} ${month} ${unformatedDate.getFullYear()}`

let meeting = document.querySelector(".meetingCall");
if (( weekDay() == "Monday") || (weekDay() == "Tuesday" )) {
    meeting.style.display = "block";
}
