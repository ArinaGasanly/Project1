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
console.log = ("Стоимость вёрстки экранов " + Number(fullPrice) + " RUB / USD / UAH / CNY" + " и Стоимость разработки сайта " + Number(screenPrice) + " RUB / USD / UAH / CNY");

// Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль
screens = ['Простые', 'Сложные', 'Интерактивные'];
console.log(String(screens).toLowerCase().split(","));

// Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))
let rollback = 300;
let result = rollback / 100;
console.log(fullPrice * result);


// 3 урок

// 2)

title = prompt('Как называется ваш проект?', 'Lesson02');
console.log('Проект называется ' + title);
// 3)

screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
console.log('Нужно разрабатывать следующие типы экранов: ' + screens);

// 4)

screenPrice = prompt('Сколько будет стоить данная работа?', 1200);
console.log(screenPrice);

// 5)

adaptive = confirm("Нужен ли адаптив на сайте?");
console.log(adaptive);


// 6)

let service1 = repair;
let servicePrice1 = 500;
let service2 = production;
let servicePrice2 = 2000;

service1 = prompt('Какой дополнительный тип услуги нужен?', '');
console.log(service1);

servicePrice1 = prompt('Сколько это будет стоить?', '');
console.log(servicePrice1);


service2 = prompt('Какой дополнительный тип услуги нужен?', '');
console.log(service2);

servicePrice2 = prompt('Сколько это будет стоить?', '');
console.log(servicePrice2);

//7)

fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
console.log(fullPrice);

//8)
let servicePercentPrice = ((fullPrice) / 100) * 81;
console.log(Math.ceil(servicePercentPrice));

//9)

if (fullPrice > 30000) {
  console.log('Даем скидку в 10%');
} else if (15000 < fullPrice < 30000) {
  console.log('Даем скидку в 5%');
} else if (0 < fullPrice < 15000) {
  console.log('Скидка не предусмотрена');
} else {
  console.log('Что-то пошло не так');
}
