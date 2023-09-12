const drinks = {
    coffee: {
        latte: "Латте - кофейный напиток с молоком и мягким вкусом кофе.",
        cappuccino: "Капучино - кофейный напиток с молоком и плотной пеной.",
        espresso: "Эспрессо - сильный кофейный напиток с небольшим объемом."
    },
    tea: {
        greenTea: "Зеленый чай - напиток с антиоксидантами и свежим вкусом.",
        blackTea: "Черный чай - насыщенный напиток с традиционным вкусом.",
        herbalTea: "Травяной чай - безкофейный напиток с разными травами."
    }
};

function checkAvailability(drinkType, drinkName) {
    if (drinkType in drinks && drinkName in drinks[drinkType]) {
        return true;
    }
    return false;
}

function processOrder() {
    let drinkType = prompt("Введите 'coffee' или 'tea':").toLowerCase();
    let drinkName = prompt("Введите название напитка:").toLowerCase();

    if (!drinkType || !drinkName) {
        console.log("Пожалуйста, заполните оба поля.");
    } else if (checkAvailability(drinkType, drinkName)) {
        console.log("Заказ принят!");
    } else {
        console.log("К сожалению, такого напитка нет в меню.");
    }
}

processOrder();


