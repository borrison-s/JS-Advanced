const colorInput = document.getElementById('color-input');
const fontSizeInput = document.getElementById('font-size-input');
const itemInput = document.getElementById('item-input');
const btnGenerator = document.getElementById('list-generator');
const result = document.getElementById('result');

btnGenerator.addEventListener('click', () => {
    const colorValue = colorInput.value;
    console.log(colorValue);
    const fontValue = fontSizeInput.value;
    console.log(fontValue);
    const itemValue = itemInput.value;
    console.log(itemValue);

    const items = itemValue.split(",");
    const newList = document.createElement('ul');
    newList.style.color = colorValue;
    newList.style.fontSize = fontValue;

    for (let i = 0; i < items.length; i++) {
        const newItem = document.createElement('li');
        newItem.innerText = items[i];
        newList.appendChild(newItem);
    }
    result.appendChild(newList);
    colorInput.value = '';
    fontSizeInput.value = '';
    itemInput.value = '';
});