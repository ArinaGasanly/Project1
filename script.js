var title = "Java Script";
var screens = "several";
var screenPrice = 600;
var rollback = "default";
var fullPrice = 1000;
var adaptive = "always";

alert("My first js code lines");
console.log("JS is amazing");



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
service1 = prompt('Какой дополнительный тип услуги нужен?', '');
console.log(service1);

let servicePrice1 = 500;
servicePrice1 = prompt('Сколько это будет стоить?', '');
console.log(servicePrice1);

let service2 = production;
service2 = prompt('Какой дополнительный тип услуги нужен?', '');
console.log(service2);

let servicePrice2 = 2000;
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
