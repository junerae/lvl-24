const countries = randomPersonData.map(item => item.region)
countries.sort();


let listOfPeople = document.getElementById('country-list')

function clickedCountries() {
    let peopleCountryDisplay = function (e) {
        for (i = 0; i < e.length; i++) {
            let newLi = document.createElement("li")
            newLi.innerHTML = (countries[i]) + "<br><br>"
            let moviesOverview = document.getElementById("singleCountry")
            moviesOverview.appendChild(newLi)
        }
    }
    peopleCountryDisplay(randomPersonData);
}

const names = randomPersonData.map(item => item.name)
names.sort();


function capWomen() {
    let displayFemales = function (e) {
        const females = randomPersonData.filter((person) => person.gender === 'female')
        for (i = 0; i < e.length; i++) {
            let newLi = document.createElement("li")
            newLi.innerHTML = (females[i].name) + "<br><br>"
            let moviesOverview = document.getElementById("singleCountry")
            moviesOverview.appendChild(newLi)
        }
    }
    displayFemales(randomPersonData);
}


