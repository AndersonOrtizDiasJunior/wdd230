
const hambutton = document.querySelector('#hamBtn');
const mainnav = document.querySelector('#menuItems')

hambutton.addEventListener('click', togleMenu);

function togleMenu () {
    if (mainnav.style.display == "flex") {
        mainnav.style.display = "none"
    } else {
        mainnav.style.display = "flex"
    }
    if (hambutton.textContent == "☰") {
        hambutton.textContent = "ⓧ"
    } else {
        hambutton.textContent = "☰"
    }
}
window.onresize = () => {if (window.innerWidth > 760) mainnav.style.display = "none"};
