class ResponsiveMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `            <nav class="navigation">
        <div class="header">                      
        <img class="navLogo" src="images/mineraltownsmalllogo.png" width="50px" height="50px" alt="chamber logo">
        <a class="name" href="index.html">
            <span class="chamberName">Friends of Mineral Town</span>
            <br>
            Chamber of commerce
        </a>
        <ul>
            <li><a href="discover.html">Discover</a></li>
            <li><a href="directory.html">Directory</a></li>
            <li><a href="join.html">Join</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
        <div class="socialMedia">
            <a href="https://www.facebook.com/">
                <img src="images/facebook-logo.png" width="20px" height="20px" alt="facebook logo">
            </a>
            <a href="https://www.linkedin.com/">
                <img src="images/linkedin-logo.png" width="20px" height="20px" alt="linkedin logo">
            </a>
        </div>
        <a class="ham" href="#"></a>
        <span class="today">Error loading date</span>
    </div>
        <ul class="togglableLinks">
            <li><a href="index.html">Home</a></li>
            <li><a href="discover.html">Discover</a></li>
            <li><a href="directory.html">Directory</a></li>
            <li><a href="join.html">Join</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>`
    }
}
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

customElements.define('responsive-menu', ResponsiveMenu);

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

const today = document.querySelector(".today")
let unformatedDate = new Date();
let month = unformatedDate.toLocaleString('default', { month: 'long' })
today.textContent = `${weekDay()}, ${unformatedDate.getDate()} ${month} ${unformatedDate.getFullYear()}`