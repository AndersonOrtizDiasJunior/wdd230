function toogleMenu() {
    var nav = document.querySelector("nav");
      if (nav.style.display == "flex") {       
        nav.style.display = "none";
      } else {
        nav.style.display = "flex";
      }
}
let mobileMenu = document.querySelector("#mobileMenu")
mobileMenu.addEventListener("click", toogleMenu)
