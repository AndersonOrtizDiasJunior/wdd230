class Order {
 constructor(name,email,cell,fruit_1,fruit_2,fruit_3,instructions) {
  this.name = name;
  this.email = email
  this.cell = cell
  this.fruit_1 = fruit_1
  this.fruit_2 = fruit_2
  this.fruit_3 = fruit_3
  this.instructions = instructions
 }

  getCarbohydrates() {
    let carb = 0
    fruits.forEach(fruit => {
      if (fruit.name == this.fruit_1 || fruit.name == this.fruit_2 || fruit.name == this.fruit_3) {
        carb += fruit.nutritions.carbohydrates
      }
    })
    return carb
 }

 getCalories() {
  let calories = 0
  fruits.forEach(fruit => {
    if (fruit.name == this.fruit_1 || fruit.name == this.fruit_2 || fruit.name == this.fruit_3) {
      calories += fruit.nutritions.calories
    }
  })
  return calories
}

getProtein() {
  let protein = 0
  fruits.forEach(fruit => {
    if (fruit.name == this.fruit_1 || fruit.name == this.fruit_2 || fruit.name == this.fruit_3) {
      protein += fruit.nutritions.protein
    }
  })
  return protein
}

getSugar() {
  let sugar = 0
  fruits.forEach(fruit => {
    if (fruit.name == this.fruit_1 || fruit.name == this.fruit_2 || fruit.name == this.fruit_3) {
      sugar += fruit.nutritions.sugar
    }
  })
  return sugar
}

getFat() {
  let fat = 0
  fruits.forEach(fruit => {
    if (fruit.name == this.fruit_1 || fruit.name == this.fruit_2 || fruit.name == this.fruit_3) {
      fat += fruit.nutritions.fat
    }
  })
  return fat
}
}

const url = `https://brotherblazzard.github.io/canvas-content/fruit.json`;
const fruitSelector1 = document.querySelector("#fruit_1")
const fruitSelector2 = document.querySelector("#fruit_2")
const fruitSelector3 = document.querySelector("#fruit_3")
fruit_names = []
fruits = []

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        fruits = await response.json();
        getFruitNames(fruits)
        updateForms()
        showOrders()
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

  function getFruitNames(data) {
    fruit_names = []
    data.forEach(fruit => {
      fruit_names.push(fruit.name)
    })
  }

  function updateForms()
  {
      setFruitsSelect(fruitSelector1)
      setFruitsSelect(fruitSelector2)
      setFruitsSelect(fruitSelector3)
  }

  function setFruitsSelect(select) {
    removeAllChildNodes(select)
    order = "third"
    if (select.id.includes('1')) {
      order = "first"
    } else if (select.id.includes('2')) {
      order = "second"
    }
    select_fruit = document.createElement("option")
    select_fruit.value = ""
    select_fruit.textContent = `Select the ${order} fruit`

    select.appendChild(select_fruit)

    fruit_names.forEach(fruit => {
        option_fruit = document.createElement("option")
        option_fruit.value = fruit
        option_fruit.textContent = fruit

        select.appendChild(option_fruit)
    })
  }
  function saveOrder(order) {
    orders = JSON.parse(window.localStorage.getItem("orders"))
    if (orders == null) {
      orders = []
    }
    orders.push(order)
    localStorage.setItem("orders", JSON.stringify(orders))
  }

  function clearForm() {
    document.querySelector("#fname").value = ""
    document.querySelector("#email").value = ""
    document.querySelector("#cell").value = ""
    document.querySelector("#fruit_1").value = ""
    document.querySelector("#fruit_2").value = ""
    document.querySelector("#fruit_3").value = ""
    document.querySelector("#fruit_1").selectedIndex = 0
    document.querySelector("#fruit_2").selectedIndex = 0
    document.querySelector("#fruit_3").selectedIndex = 0
    document.querySelector("#instructions").value = ""
  }
  function hideOrdersIfNeeded() {
    ordersDiv = document.querySelector("#ordersDiv") 
    orders = JSON.parse(window.localStorage.getItem("orders"))
    if (orders == null) {
      ordersDiv.style.display = "none"
      return false
    } else {
      ordersDiv.style.display = "grid"
      return true
    }
  }
  function clearOrders() {
    ordersDiv = document.querySelector("#ordersDiv") 
    while (ordersDiv.firstChild) {
      ordersDiv.removeChild(ordersDiv.firstChild);
  }
  h2 = document.createElement("h2")
  h2.textContent = "My Orders"
  ordersDiv.appendChild(h2)
}

function getOrders() {
  json = orders = JSON.parse(window.localStorage.getItem("orders"))
  orders = []
  json.forEach(order => {
    orders.push(new Order(order.name,order.email,order.cell,order.fruit_1,order.fruit_2,order.fruit_3,order.instructions))
  })
  return orders
}
  function showOrders() {
    clearOrders()
    ordersDiv = document.querySelector("#ordersDiv") 
    orderCards = document.createElement("div")
    orderCards.id = "orderCards"
    
    if (hideOrdersIfNeeded()) {
      orders = getOrders()
      orders.forEach(order => {
        div = document.createElement("div")
        div.className = "order"

        fname = document.createElement("p")
        fname.innerHTML = `<span class="label">Name:</span> ${order.name}`
        div.appendChild(fname)

        email = document.createElement("p")
        email.innerHTML = `<span class="label">E-mail:</span>  <span class="smaller">${order.email}</span> `
        div.appendChild(email)

        cell = document.createElement("p")
        cell.innerHTML = `<span class="label">Phone Number:</span>  ${order.cell}`
        div.appendChild(cell)

        first_fruit = document.createElement("p")
        first_fruit.innerHTML = `<span class="label">Fruit:</span>  ${order.fruit_1}`
        div.appendChild(first_fruit)

        if (order.fruit_2 != "") {
          second_fruit = document.createElement("p")
          second_fruit.innerHTML = `<span class="label">Second fruit:</span>  ${order.fruit_2}`
          div.appendChild(second_fruit)
        }

        if (order.fruit_3 != "") {
          third_fruit = document.createElement("p")
          third_fruit.innerHTML = `<span class="label">Third fruit:</span>  ${order.fruit_3}`
          div.appendChild(third_fruit)
        }

        carbs = document.createElement("p")
        carbs.innerHTML = `<span class="label">Total carbohydrates:</span> ${order.getCarbohydrates()}`
        div.appendChild(carbs)

        protein = document.createElement("p")
        protein.innerHTML = `<span class="label">Total protein:</span> ${order.getProtein()}`
        div.appendChild(protein)

        fat = document.createElement("p")
        fat.innerHTML = `<span class="label">Total fat:</span> ${order.getFat()}`
        div.appendChild(fat)

        sugar = document.createElement("p")
        sugar.innerHTML = `<span class="label">Total sugar:</span> ${order.getSugar()}`
        div.appendChild(sugar)

        calories = document.createElement("p")
        calories.innerHTML = `<span class="label">Total calories:</span> ${order.getCalories()}`
        div.appendChild(calories)


        if (order.instructions != "") {
          instructions = document.createElement("p")
          instructions.innerHTML = `<span class="label">special Instructions:</span><br> ${order.instructions}`
          div.appendChild(instructions)
        }

        orderCards.appendChild(div)
      })
      ordersDiv.appendChild(orderCards)
    }
  }
  function showSnackBar(message) {
    var snackbar = document.querySelector("#snackbar");
    snackbar.textContent= message
    snackbar.className = "show";
    setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
  }

  const check = (e) => {
    e.preventDefault();  
    const name = document.querySelector("#fname").value;
    const email = document.querySelector("#email").value;
    const cell = document.querySelector("#cell").value;
    let fruit_1 = document.querySelector("#fruit_1").value;
    let fruit_2 = document.querySelector("#fruit_2").value;
    let fruit_3 = document.querySelector("#fruit_3").value;
    if (fruit_2 == fruit_1 ) {
      fruit_2 = ""
    } 
    if (fruit_3 == fruit_1 ) {
      fruit_3 = ""
    }
    if (fruit_3 == fruit_2 && fruit_2 != fruit_1 && fruit_3 !="" ) {
      fruit_3 = ""
    } 
    const instructions = document.querySelector("#instructions").value;
    order = new Order(name,email,cell,fruit_1,fruit_2,fruit_3,instructions);

    saveOrder(order);
    showSnackBar("Order Saved!");
    clearForm();
    showOrders();
    return false
};
  
  apiFetch();