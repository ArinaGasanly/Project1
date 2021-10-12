let rollback;
let title;
let screens;
let screenPrice;
let adaptive;
let service1;
let servicePrice1;
let service2;
let servicePrice2;
let fullPrice;
let servicePercentPrice;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function () {
  title = prompt('Как называется ваш проект?', 'Калькулятор верстки')
  screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные')
  adaptive = confirm('Нужен ли адаптив на сайте?')

  do {
  screenPrice = prompt('Сколько будет стоить данная работа?')
  } while (!isNumber(screenPrice))
  
}

asking() //вызов функции



const getAllServicePrices = function () {
  let sum = 0
  let value;

  for (let i = 0; i < 2; i++) {

    if (i === 0) {
      service1 = prompt('Какой дополнительный тип услуги нужен?')

    } else if (i === 1) {
      service2 = prompt('Какой дополнительный тип услуги нужен?')

    }
     
    do {
      value = prompt('Сколько это будет стоить?')
    } while (!isNumber(value))

    sum += Number(value)
  }
  
  return sum 
}


const allServicePrices = getAllServicePrices()

function getFullPrice() {
  return screenPrice + allServicePrices
}

getFullPrice()


function getTitle(title) {
  return title.trim().charAt(0).toUpperCase() + title.trim().slice(1).toLowerCase()
}
title = getTitle(title)


function getServicePercentPrices() {
  return fullPrice - (fullPrice * (rollback / 100))
}
const servicePercentPrices = getServicePercentPrices()


const showTypeOf = function (data) {
  console.log('Переменная' + data + ' является: ' + typeof data)
}


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

showTypeOf(title)
showTypeOf(showTypeOf)
showTypeOf(adaptive)

console.log(getRollbackMessage(fullPrice))
console.log('Простые, Сложные, Интерактивные'.split(", "))




