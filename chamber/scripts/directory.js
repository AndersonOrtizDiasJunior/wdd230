const requestURL = 'data/data.json';
const companies = document.querySelector('#companies');
const categoriesSelect = document.querySelector('#categories');
const categoriesList = [];
const input = document.querySelector("#searchQuery")
const inputBtn = document.querySelector("#searchQueryBtn")
cardId = "companyCard"
companiesClass = "companyCards"
const modeSelector = document.querySelector("#viewMode")
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
 input.addEventListener("change",searchByName)
 inputBtn.addEventListener("click",searchByName)
 modeSelector.addEventListener("change",changeViewMode)

 function changeViewMode() {
  mode = modeSelector.value
  cardId = mode
  companiesClass = `${mode}s`
  clearCompanies()
  companiesJson.forEach(displayCompanies);
  categoriesSelect.value = "All"
  input.value = ""
 }
 function searchByName() {
  categoriesSelect.value = "All"
  searchValue = input.value
  if (searchQuery == "") {
    clearCompanies()
    companiesJson.forEach(displayCompanies);
  }
  else{
    searchValue = searchValue.toLowerCase() 
    filteredCompanies = []
      if (companiesJson.length > 0) {
        companiesJson.forEach(company =>{ 
          if (company.name.toLowerCase().includes(searchValue)) {
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
    input.value = ""
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
    let card = document.createElement('div');
    card.id = cardId
    companies.className = companiesClass
    let name = document.createElement('p');
    let logo = document.createElement('img');
    let site = document.createElement('p')
    let membership = document.createElement('p')
    let addres = document.createElement('p')
    let phone = document.createElement('p')
    let categories = document.createElement('p')

    logo.src = company.logoURL
    card.appendChild(logo)

    name.textContent =  company.name
    name.id = "companyName"
    card.appendChild(name)

    let link = document.createElement("a")
    link.href = company.website
    link.className = "site"
    link.text = "Visit site"
    site.appendChild(link)
    site.id="companySite"
    
    if (cardId == "companyList") {
      card.appendChild(document.createElement("br"))
    }
    
    card.appendChild(site)

    if (cardId == "companyCard") {
      addres.innerHTML = `${company.addres}`
      membership.innerHTML = `${company.membership} level`
      phone.innerHTML = `${company.phone}`
    } else {
      membership.innerHTML = `<span class="label"> Membership level:</span><br>${company.membership}`
      addres.innerHTML = `<span class="label"> Address:</span><br>${company.addres}`
      phone.innerHTML = `<span class="label">Phone:</span><br>${company.phone}`
    }
    membership.id="companyMembership"
    card.appendChild(membership)

    
    addres.id="companyAddress"
    card.appendChild(addres)

    
    phone.id="companyPhone"
    card.appendChild(phone)

    categoriesText = '<span class="label">Categories:</span><br>'
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
   categories.id="companyCategories"
   card.appendChild(categories)

   companies.appendChild(card)
  }
  