
const url = `https://brotherblazzard.github.io/canvas-content/fruit.json`;
const fruit1 = document.querySelector("#fruit_1")
const fruit2 = document.querySelector("#fruit_2")
const fruit3 = document.querySelector("#fruit_3")
fruits = []

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        getFruitNames(data)
        updateForms()
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
    fruits = []
    data.forEach(fruit => {
      fruits.push(fruit.name)
    })
  }

  function updateForms()
  {
      setFruitsSelect(fruit1)
      setFruitsSelect(fruit2)
      setFruitsSelect(fruit3)
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
    select_fruit.value = "Select"
    select_fruit.textContent = `Select the ${order} fruit`

    select.appendChild(select_fruit)

    fruits.forEach(fruit => {
        option_fruit = document.createElement("option")
        option_fruit.value = fruit
        option_fruit.textContent = fruit

        select.appendChild(option_fruit)
    })
  }
  
  apiFetch();
