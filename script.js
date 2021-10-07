let rollback = 300;
let result = rollback / 100;
let title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let screenPrice = prompt('Сколько будет стоить данная работа?', 756);
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt('Какой дополнительный тип услуги нужен?', '');
let servicePrice1 = prompt('Сколько это будет стоить?', '');
let service2 = prompt('Какой дополнительный тип услуги нужен?', '');
let servicePrice2 = prompt('Сколько это будет стоить?', '');
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - (fullPrice * (rollback / 100))


// 4 урок

// 1)
const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
};

let allServicePrices = getAllServicePrices(servicePrice1, servicePrice1);


// 2)
function getFullPrice() {
  return screenPrice + allServicePrices;
}

getFullPrice(screenPrice, allServicePrices)


// 3)
let str = 'title';

function getTitle() {
  return str.split("").map((s, i) => (i % 2 != 0 ? s.toUpperCase() : s)).join("");
}

getTitle('title');

// 4)

fullPrice = 3000;
function getServicePercentPrices(fullPrice, a, b) {
  return (fullPrice / a) * b;
}
let servicePercentPrices = getServicePercentPrices(fullPrice, 100, 70);

//5)
screens = ['Простые', 'Сложные', 'Интерактивные'];
console.log('Простые, Сложные, Интерактивные'.split(","));

//6)


const showTypeOf = function(screens) {
  console.log(String(screens).split(","));
}



const getRollbackMessage = function(price) {
  if (price >= 30000) {
    return 'Даем скидку в 10%'
  } else if (price >= 15000 && price < 30000) {
    return 'Даем скидку в 5%'
  } else if (price >= 0 && price < 15000) {
    return 'Скидка не предусмотрена'
  } else {
    return 'Что-то пошло не так'
  }
}

showTypeOf('Интерактивные')
showTypeOf('Интерактивные')
showTypeOf('Интерактивные')

console.log(getRollbackMessage(fullPrice));
console.log('Проект называется ' + title);
console.log('Нужно разрабатывать следующие типы экранов: ' + screens);
console.log(screenPrice);
console.log(adaptive);
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость вёрстки экранов " + fullPrice + " RUB / USD / UAH / CNY" + " и Стоимость разработки сайта " + screenPrice + " RUB / USD / UAH / CNY");
console.log('Простые, Сложные, Интерактивные'.toLowerCase().split(","));
console.log(fullPrice);
console.log(fullPrice * result);
console.log(Math.ceil(servicePercentPrice));
console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);


