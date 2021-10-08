// 5 урок

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


//1 задание

const allServicePrices = prompt('Сколько это будет стоить?', '4000');
 
  do {
    screenPrice = +prompt('Сколько будет стоить данная работа?', 2000);

  } while (typeof screenPrice == 'number' && typeof allServicePrices == 'number') {
      const getAllServicePrices = function () {
        return prompt('Сколько это будет стоить?');
  
   } 
  }

  screenPrice();







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

