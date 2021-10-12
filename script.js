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


const showTypeOf = function (data) {
  console.log('Тип экранов' + data + ' является: ' + typeof data);
}

showTypeOf(' Простые ')
showTypeOf(' Интерактивные ')
showTypeOf(' Сложные ')


const getRollbackMessage = function (price) {
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





//5 урок

const allServicePrices = prompt('Сколько это будет стоить?', '4000');
let screenPrice;
 
  do {
    screenPrice = prompt('Сколько будет стоить данная работа?');

  } while (!isNumber(screenPrice)); 

console.log(Object.is(allServicePrices, screenPrice));


  // Практическая часть (видео)

const isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num)
}


const asking = function() {
  title = prompt('Как называется ваш проект?', 'Калькулятор верстки')

  screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные')

  screenPrice = prompt('Сколько будет стоить данная работа?')

  while(isNumber(screenPrice) || screenPrice.trim() === "" || screenPrice === null) {
    screenPrice = prompt('Сколько будет стоить данная работа?')
  }

  adaptive = confirm('Нужен ли адаптив на сайте?')
}


const getAllServicePrices = function () {
  let sum = 0

  for (let i = 0; i < 2; i++) {

    if (i === 0) {
      service1 = prompt('Какой дополнительный тип услуги нужен?')

    } else if (i === 1) {
      service2 = prompt('Какой дополнительный тип услуги нужен?')

    }


    sum += prompt('Сколько это будет стоить?')
  }

  return sum
  //return servicePrice1 + servicePrice2
}


console.log(getRollbackMessage(fullPrice));