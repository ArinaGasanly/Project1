//Вывести в консоль тип данных значений переменных title, fullPrice, adaptive;

let title = "Lesson02";
console.log(typeof title);

let fullPrice = 250000;
console.log(typeof fullPrice);

let adaptive = true;
console.log(typeof adaptive);

// Вывести в консоль тип данных значений переменных title, fullPrice, adaptive;
let screens = ['Простые', 'Сложные', 'Интерактивные'];
console.log(screens.length);

//Вывести в консоль “Стоимость разработки сайта (fullPrice) рублей/ долларов/гривен/юани” и “Стоимость верстки экранов (screenPrice) рублей/ долларов/гривен/юани” 
let screenPrice = 756;
console.log("Стоимость вёрстки экранов " + fullPrice + "' RUB / USD / UAH / CNY" + " и Стоимость разработки сайта " + screenPrice + " RUB / USD / UAH / CNY");

// Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль
console.log(screens.toLowerCase().split(","));

// Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))
let rollback = 300;
let result = rollback / 100;
console.log(fullPrice * result);


