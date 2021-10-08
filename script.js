let rollback = 30;
let title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let screenPrice = prompt('Сколько будет стоить данная работа?', 756);
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt('Какой дополнительный тип услуги нужен?', '');
let servicePrice1 = prompt('Сколько это будет стоить?', '');
let service2 = prompt('Какой дополнительный тип услуги нужен?', '');
let servicePrice2 = prompt('Сколько это будет стоить?', '');
let fullPrice = 3000;
let servicePercentPrice = fullPrice - (fullPrice * (rollback / 100))


// 4 урок

// 1)

const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
};

const allServicePrices = getAllServicePrices();


// 2)
function getFullPrice() {
  return screenPrice + allServicePrices;
}

getFullPrice();


// 3)
let str = 'title';

function getTitle(title) {
  return title.trim().charAt(0).toUpperCase() + title.trim().slice(1).toLowerCase();
}
title = getTitle(title);

// 4)


function getServicePercentPrices() {
  return fullPrice - (fullPrice * (rollback / 100));
}
const servicePercentPrices = getServicePercentPrices();

//5)
console.log('Простые, Сложные, Интерактивные'.split(","));


//6)


const showTypeOf = function(data) {
  console.log('Тип экранов' + data + ' является: ' + typeof data);
}

showTypeOf(' Простые ')
showTypeOf(' Интерактивные ')
showTypeOf(' Сложные ')


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



console.log(getRollbackMessage(fullPrice));


