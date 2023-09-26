const showButtons = document.querySelectorAll('.show-hide-button');
const answers = document.querySelectorAll('.answer');

showButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        if (answers[index].classList.contains('hidden')) {
            answers[index].classList.remove('hidden');
            this.textContent = 'Скрыть ответ';
        } else {
            answers[index].classList.add('hidden');
            this.textContent = 'Показать ответ';
        }
    });
});

