//Вывести в консоль тип данных значений переменных title, fullPrice, adaptive;

let title = "Калькулятор вёрстки";
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
console.log("Стоимость вёрстки экранов " + fullPrice + " RUB / USD / UAH / CNY" + " и Стоимость разработки сайта " + screenPrice + " RUB / USD / UAH / CNY");

// Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль
screens = ['Простые', 'Сложные', 'Интерактивные'];
console.log('Простые, Сложные, Интерактивные'.toLowerCase().split(","));

// Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))
let rollback = 300;
let result = rollback / 100;
console.log(fullPrice * result);


// 3 урок

// 3)

title = prompt('Как называется ваш проект?', 'Lesson02');
console.log('Проект называется ' + title);
// 4)

screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
console.log('Нужно разрабатывать следующие типы экранов: ' + screens);

// 5)

screenPrice = prompt('Сколько будет стоить данная работа?', 1200);
console.log(screenPrice);

// 6)

adaptive = confirm("Нужен ли адаптив на сайте?");
console.log(adaptive);


// 7)

let service1 = prompt('Какой дополнительный тип услуги нужен?', '');
console.log(service1);

let servicePrice1 = prompt('Сколько это будет стоить?', '');
console.log(servicePrice1);

let service2 = prompt('Какой дополнительный тип услуги нужен?', '');
console.log(service2);

let servicePrice2 = prompt('Сколько это будет стоить?', '');
console.log(servicePrice2);

//8)

fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);

//9)

let servicePercentPrice = fullPrice - (fullPrice * (rollback / 100))
console.log(Math.ceil(servicePercentPrice));

//10)

if (fullPrice >= 30000) {
  console.log('Даем скидку в 10%');
} else if (15000 >= fullPrice && fullPrice < 30000) {
  console.log('Даем скидку в 5%');
} else if (fullPrice >= 0 && fullPrice < 15000) {
  console.log('Скидка не предусмотрена');
} else {
  console.log('Что-то пошло не так');
}


