class ResponsiveMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<nav>
        <ul class="navigation">
            <li><a class="ham" href="#">Menu</a></li>
            <li><a href="index.html">Home</a></li>
            <li><a href="target-audience.html">Target Audience</a></li>
            <li><a href="color-scheme.html">Color Scheme</a></li>
            <li><a href="typography.html">Typography</a></li>
        </ul>
    </nav>`;
    }
}

customElements.define('responsive-menu', ResponsiveMenu);

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
