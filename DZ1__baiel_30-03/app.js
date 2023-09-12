var userName = prompt("Укажите ваше имя")
var birthdate = prompt(" Укажите день рождения(ММ/ДД):");
var parts = birthdate.split("/");
var month = parseInt(parts[0]);
var day = parseInt(parts[1]);
    if (day >=31){
         yourZodiac= 'день не правильно';
    }
var yourZodiac;

if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    if (day >=31){
        yourZodiac= 'день не правильно';
    }
}
else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {ч
    yourZodiac = "Телец";
    if (day >=30){
        yourZodiac= 'день не  правильно';
    }
}
else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    yourZodiac = "Близнецы";
    if (day >=31){
        yourZodiac= 'день не правильно';
    }
}
else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    yourZodiac = "Лев";
    if (day >=30){
        yourZodiac= 'день не правильно';
    }
}
else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    yourZodiac = "Рак";
    if (day >=31){
        yourZodiac= ' ' + 'день не правильно';
    }
}
else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    yourZodiac = "Дева";
    if (day >=31){
        yourZodiac= ' ' + 'день не правильно';
    }
}
else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    yourZodiac = "Весы";
    if (day >=30){
        yourZodiac= ' ' + 'день не правильно';
    }
}
else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    yourZodiac = "Скорпион";
    if (day >=31){
        yourZodiac= ' ' + 'день не правильно';
    }
}
else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    yourZodiac = "Стрелец";
    if (day >=30){
        yourZodiac= ' ' + 'день не правильно';
    }
}
else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    yourZodiac = "Козерог";
    if (day >=31){
        yourZodiac= ' ' + 'день не правильно';
    }
}
else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    yourZodiac = "Водолей";
    if (day >=31){
        yourZodiac= ' ' + 'день не правильно';
    }
}
else if ((month === 2 && day >= 19 && day <= 28)) {
    yourZodiac = "Рыбы";
    if (day >=29){
        yourZodiac= ' ' + 'день не правильно';
    }
}
else {
    alert("Пожалуйста, введите верную дату рождения.");
    yourZodiac = "НЕправельный";
    retu
}
alert(userName +" " + "ваш знак зодиака" + ""  + yourZodiac );