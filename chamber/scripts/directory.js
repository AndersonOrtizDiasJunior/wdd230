const requestURL = 'data/data.json';
const companies = document.querySelector('#companies');
const categoriesSelect = document.querySelector('#categories');
const categoriesList = [];
const input = document.querySelector("#searchQuery")
const inputBtn = document.querySelector("#searchQueryBtn")
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    companiesJson = jsonObject['companies'];
    companiesJson.forEach(displayCompanies);
    addCategories(categoriesList)
 });

 categoriesSelect.addEventListener("change",searchByCategory)
 input.addEventListener("change",searchByNameOrDescription)
 inputBtn.addEventListener("click",searchByNameOrDescription)

 function searchByNameOrDescription() {
  searchValue = input.value
  if (searchQuery == "") {
    clearCompanies()
    companiesJson.forEach(displayCompanies);
  }
  else{    
    filteredCompanies = []
      if (companiesJson.length > 0) {
        companiesJson.forEach(company =>{ 
          isSearchIn = (company.name.includes(searchValue) || company.description.includes(searchValue))
          if (isSearchIn) {
            filteredCompanies.push(company)
          }
        })
        clearCompanies()
        if (filteredCompanies.length == 0) {
          noResults()
        } else {
          filteredCompanies.forEach(displayCompanies)
        }
      }
    }
}
  function searchByCategory() {
    category = categoriesSelect.value
    if (category == "All") {
      clearCompanies()
      companiesJson.forEach(displayCompanies);
    }
    else{    
      filteredCompanies = []
        if (companiesJson.length > 0) {
          companiesJson.forEach(company =>{ 
            isCategoryIn = false
            company.categories.forEach( companyCategory => {
              if (category ==companyCategory) { 
                isCategoryIn = true
              }
            })
            if (isCategoryIn) {
              filteredCompanies.push(company)
            }
          })
          clearCompanies()
          if (filteredCompanies.length == 0) {
            noResults()
          } else {
            filteredCompanies.forEach(displayCompanies)
          }
        }
      }
  }
  function clearCompanies() {
    while (companies.firstChild) {
      companies.removeChild(companies.firstChild);
  }
  }
  function noResults() {
    h3 = document.createElement('h3')
    h3.textContent = "No results found"
    companies.appendChild(h3)
  }
  function addCategories(categoriesList) {
    categoriesList.forEach(category => {
      option = document.createElement('option')
      option.value = category
      option.textContent = category
      categoriesSelect.appendChild(option)
    })
  }

  function displayCompanies(company) {
    // Create elements to add to the document
    let card = document.createElement('div');
    card.className = "company"
    let name = document.createElement('h3');
    let logo = document.createElement('img');
    let site = document.createElement('a')
    let membership = document.createElement('p')
    let addres = document.createElement('p')
    let phone = document.createElement('p')
    let description = document.createElement('p')
    let categories = document.createElement('p')

    name.textContent =  company.name
    card.appendChild(name)

    logo.src = company.logoURL
    card.appendChild(logo)

    site.href = company.website
    site.className = "site"
    site.text = "Website"
 
    card.appendChild(site)

    membership.innerHTML = `<span class="label"> Membership level: </span>${company.membership}`
    card.appendChild(membership)

    addres.innerHTML = `<span class="label"> Addres: </span>${company.addres}`
    card.appendChild(addres)

    phone.innerHTML = `<span class="label">Phone: </span>${company.phone}`
    card.appendChild(phone)

    description.innerHTML = `<span class="label">Description: </span>${company.description}`
    card.appendChild(description)

    categoriesText = '<span class="label">Categories: </span>'
    if (company.categories.length > 1) {
        company.categories.forEach( category =>{
            categoriesText += `${category}, `
            if (!(category in categoriesList) ) {
              categoriesList.push(category)
            }
        })
    } else {
        categoriesText += company.categories[0]
        if (!(company.categories[0] in categoriesList) ) {
          categoriesList.push(company.categories[0])
        }
    }
   categories.innerHTML = categoriesText
   card.appendChild(categories)

   companies.appendChild(card)
  }
  