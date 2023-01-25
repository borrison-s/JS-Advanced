function handleWithFetch () {
    fetch('https://swapi.dev/api/films')
    .then(function(response){
        console.log('Request was successful!');
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);
        printFilms(myJson.results);
    })
}

function printFilms (films) {
    let resultList = document.getElementById('films');
    resultList.innerHTML = '';
    for (let i = 0; i < films.length; i++) {
        resultList.innerHTML += `<li>${films[i].title}</li>`;
    }
}
let callButton = document.getElementById('sendRequest');
callButton.addEventListener('click', handleWithFetch);


