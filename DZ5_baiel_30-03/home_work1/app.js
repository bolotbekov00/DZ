const button = document.getElementById('button');
const output = document.getElementById('output');
button.addEventListener('click', function() {
    const inputValue = prompt('Введите текст:');
    if (inputValue !== null) {
        output.textContent = inputValue;
    } else {
        alert('Ошибка: Ничего не введено');
    }
});
