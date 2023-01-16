const htmlBody = document.querySelector('body');
const title = document.querySelector('h1');
title.style.color = 'white';
title.style.textAlign = 'center';

const randomBackgroundColor = function () {
    const colors = ['rgb(0, 255, 0)', 'rgb(255, 0, 0)', 'rgb(255, 255, 0)', 'rgb(255, 125, 0)', 'rgb(0, 0, 255)', 'rgb(85, 38, 0)', 'rgb(0, 0, 0)'];

    const randomIndex = Math.floor(Math.random() * colors.length);

    const randomColor = colors[randomIndex];

    htmlBody.style.background = randomColor;

    const pContent = `The random color is: ` + randomColor;

    const newElement = document.createElement('h2');
    newElement.textContent = pContent;
    newElement.style.textAlign = 'center';
    newElement.style.color = 'white';

    document.body.appendChild(newElement);

}

randomBackgroundColor();


