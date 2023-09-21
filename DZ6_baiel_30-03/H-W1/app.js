function books(...books) {
    const booksWith = [];
    const otherBooks = [];

    for (const book of books) {
        if (book.includes('у') || book.includes('У')) {
            booksWith.push(book);
        } else {
            otherBooks.push(book);
        }
    }

    console.log(booksWith);
    console.log(otherBooks);
}

// Пример использования функции
books('Книга', 'Детектив', 'Учебник', 'Роман', 'Сказка', 'Другая книга', "Умная книга");
