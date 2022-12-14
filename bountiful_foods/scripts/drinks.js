drinksNumber = 0
mainDrinks = document.querySelector("#mainDrinks")
noDrinks = document.querySelector(".nodrinks")
drinksnumberLabel = document.querySelector(".drinksNumber")
orders = JSON.parse(window.localStorage.getItem("orders"))
if (orders != null) {
    mainDrinks.style.display = "flex"
    noDrinks.style.display = "none"
    drinksNumber = orders.length
    drinksnumberLabel.textContent = drinksNumber
}else {
    mainDrinks.style.display = "none"
    noDrinks.style.display = "flex"
}