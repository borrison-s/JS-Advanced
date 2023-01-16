const namesArr = ['John', 'Mary', 'Peter', 'Joseph', 'Walter'];

const unorderedList = document.querySelector('ul');
const fillButton = document.querySelector('button');

fillButton.addEventListener('click', () => {
    for (let name of namesArr) {
        const newListItem = document.createElement('li');
        newListItem.innerText = name;
        unorderedList.appendChild(newListItem);
    }
});