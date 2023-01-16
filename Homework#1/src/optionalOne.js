const colorInput = document.getElementById('color-input');
const fontSizeInput = document.getElementById('font-size-input');
const textInput = document.getElementById('text-input');
const storyDiv = document.getElementById('quote');
const btnGenerator = document.getElementById('title-generator');

btnGenerator.addEventListener('click', () => {
   const colorValue = colorInput.value;
   const fontSizeValue = fontSizeInput.value;
   const textValue = textInput.value;

   const newTitle = document.createElement('h1');
   newTitle.innerText = textValue;
   newTitle.style.color = colorValue;
   newTitle.style.fontSize = fontSizeValue;

   storyDiv.appendChild(newTitle);


   colorInput.value = '';
   fontSizeInput.value = '';
   textInput.value  = '';
});