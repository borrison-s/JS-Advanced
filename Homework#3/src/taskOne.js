let colorInput = document.getElementById('color-input');
let fontSizeInput = document.getElementById('font-size-input');
let btn = document.getElementById('btn');
let textHeader = document.getElementById('text-header');

const addColor = (element, color) => element.style.color = color;
const addFontSize = (element, fontSize) => element.style.fontSize = `${fontSize}px`;

btn.addEventListener('click', () => {
    addColor(textHeader, colorInput.value);
    addFontSize(textHeader, fontSizeInput.value);

    colorInput.value = '';
    fontSizeInput.value = '';
});