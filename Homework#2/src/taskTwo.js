// Create a button When the button is clicked, call the StarWars api for the 20th vehicle. Send the request with AJAX AND fetch call
// Print the vehicle name in an h1 tag.
// Print the vehicle stats in a table:

// Model
// Manufacturer
// Crew
// Passengers
// Class
// URL: https://swapi.dev/api/vehicles/20

let callBtn = document.getElementById("callBtn");
let result = document.getElementById("result");
callBtn.addEventListener("click", callPersonOneWithFetch);

function callPersonOneWithFetch() {
    fetch('https://swapi.dev/api/vehicles/20/')
        .then(function(response) {
            console.log("Request was successful!");
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            printName(myJson.name);
            printStats(myJson);
        })
}

function printName(name) {
    let resultName = document.getElementsByTagName("h1")[0];
    resultName.innerText = name;
}

function printStats(response) {
    let resultTable = document.getElementsByTagName("tbody")[0];
    resultTable.innerHTML = "";
    resultTable.innerHTML += `
    <tr>
        <td> Model </td>
        <td> ${response.model} cm </td>
    </tr>
    <tr>
        <td> Manufacturer </td>
        <td> ${response.manufacturer} kg </td>
    </tr>
    <tr>
        <td> Crew </td>
        <td> ${response.crew} </td>
    </tr>
    <tr>
        <td> Passengers </td>
        <td> ${response.passengers} </td>
    </tr>
    <tr>
        <td> Class </td>
        <td> ${response.vehicle_class}
    </tr>
    `;
}


