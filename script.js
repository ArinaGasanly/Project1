// Следующим переменным присвоить значения
let title;
let screens;
let screenPrice;
let rollback;
let fullPrice;
let adaptive;


//Вывести в консоль тип данных значений переменных title, fullPrice, adaptive;

title = "Lesson02";
console.log(typeof title);

fullPrice = 250000;
console.log(typeof fullPrice);


adaptive = true;
console.log(typeof adaptive);

// Вывести в консоль тип данных значений переменных title, fullPrice, adaptive;
screens = ['Простые', 'Сложные', 'Интерактивные'];
console.log(screens.length);

//Вывести в консоль “Стоимость разработки сайта (fullPrice) рублей/ долларов/гривен/юани” и “Стоимость верстки экранов (screenPrice) рублей/ долларов/гривен/юани” 
screenPrice = 756;
console.log = ("Стоимость вёрстки экранов " + (fullPrice) + " RUB / USD / UAH / CNY" + " и Стоимость разработки сайта " + (screenPrice) + " RUB / USD / UAH / CNY");

// Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль
console.log(screens.toLowerCase().split(","));

// Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))
rollback = 300;
let result = rollback / 100;
console.log(fullPrice * result);

