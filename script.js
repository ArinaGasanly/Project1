let rollback = 300;
let result = rollback / 100;


// 3 урок

// 3)

let title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
console.log('Проект называется ' + title);
// 4)

let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
console.log('Нужно разрабатывать следующие типы экранов: ' + screens);

// 5)

let screenPrice = prompt('Сколько будет стоить данная работа?', 756);
console.log(screenPrice);

// 6)

let adaptive = confirm("Нужен ли адаптив на сайте?");
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

let fullPrice = screenPrice + servicePrice1 + servicePrice2;
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





console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость вёрстки экранов " + fullPrice + " RUB / USD / UAH / CNY" + " и Стоимость разработки сайта " + screenPrice + " RUB / USD / UAH / CNY");
console.log('Простые, Сложные, Интерактивные'.toLowerCase().split(","));
console.log(fullPrice * result);
