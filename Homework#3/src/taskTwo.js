// Task 2
// Create an html page with a table and a button. When the button is clicked show results for the first 10 planets from the Star Wars api. The information in the table are:

// Planet Name
// Population
// Climate
// Gravity
// There should be a function that makes the call to the api for the planets ( should have URL for a parameter ) There should be a function that prints planets in to the table 
// **API URL: ** https://swapi.dev/api/planets/?page=1

let callBtn = document.getElementById('btn');
callBtn.addEventListener('click', getResults);


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






