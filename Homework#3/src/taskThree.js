let callBtn = document.getElementById('call-button');
callBtn.addEventListener('click', getResults);
let nextBtn = document.getElementById('next-button');
nextBtn.addEventListener('click', getNext);

let prevButton = document.getElementById('prev-button');
prevButton.addEventListener('click', getPrev);

function getResults() {
    fetch('https://swapi.dev/api/planets/?page=1')
    .then(function(response) {
        console.log(response);
        return  response.json();
    })
    .then(function(data) {
        console.log(data);
        printResults(data.results);
    })
}

let page = 1;

function getNext() {
    fetch(`https://swapi.dev/api/planets/?page=2`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        printResults(data.results);
        nextBtn.style.display = "none";
        prevButton.style.display = "block";
        page++;
    });
}

function getPrev() {
    fetch(`https://swapi.dev/api/planets/?page=1`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        printResults(data.results);
        prevButton.style.display = "none";
        nextBtn.style.display = "block";
        page--;
    });
}

function printResults(response) {
    if(Array.isArray(response)){
        let resultTable = document.getElementsByTagName('tbody')[0];
        resultTable.innerHTML = '';
        response.forEach(function(planet) {
            resultTable.innerHTML += `
            <tr>
                <td> Planet Name</td>
                <td> ${planet.name} </td>
            </tr>
            <tr>
                <td> Population </td>
                <td> ${planet.population} </td>
            </tr>
            <tr>
                <td> Climate </td>
                <td> ${planet.climate} </td>
            </tr>
            <tr>
                <td> Gravity </td>
                <td> ${planet.gravity} </td>
            </tr>
            <br>
            `;
        });
    }
}