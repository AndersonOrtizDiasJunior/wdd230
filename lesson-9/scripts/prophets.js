const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
    console.table(jsonObject);  // temporary checking for valid response and data parsing
  });
  
  function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let birthDate = document.createElement('p')
    let birthPlace = document.createElement('p')
    // Change the textContent property of the h2 element to contain the prophet's full name
    fullName = `${prophet.name} ${prophet.lastname}`;
    h2.textContent = fullName;
    order = ""
    switch (prophet.order) {
        case 1:
            order = "1st"
        break;
        case 2:
            order = "2nd"
        break;
        case 3:
            order = "3rd"
        break;
        default:
            order = `${prophet.order}th`
        break;
    }
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${fullName} - ${order} Latter-day President`);
    portrait.setAttribute('loading', 'lazy');
    birthPlace.textContent = `Birth date: ${prophet.birthplace}`
    birthDate.textContent = `Birth date: ${prophet.birthdate}`
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }
  