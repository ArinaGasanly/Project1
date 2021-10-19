
const title = document.getElementsByTagName('h1')[0];
const buttonsCount = document.getElementsByClassName('.handler_btn');
const btn = document.querySelector('.screen-btn');
const percentValue = document.querySelectorAll('.other-items.percent');
const numberValue = document.querySelectorAll('other-items.number');
const inputType = document.querySelector('.rollback input[type=range]');
const allInputs = document.querySelector('div.rollback > div.main-controls__range > span.range-value');
const rangeValue = document.getElementsByClassName('total-input');
let screenBlocks = document.querySelectorAll('.screen');


const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 30,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},
  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getTitle();
    appData.getServicePercentPrice();

    appData.logger();
  },
  asking: function () {

    do {
      title = prompt('Как называется ваш проект?', 'Калькулятор верстки')
    } while (appData.isString(title))

    for (let i = 0; i < 2; i++) {
      let name;
      let price = 0

      do {
        name = prompt('Какие типы нужно разработать?')
      } while (appData.isString(name))

      do {
        price = prompt('Сколько будет стоить данная работа?')
      } while (!appData.isNumber(price))

      appData.screens.push({ id: i, name: name, price: price })
    }


    for (let i = 0; i < 2; i++) {
      let name;
      let price = 0

      do {
        name = prompt('Какой дополнительный тип услуги нужен?')
      } while (appData.isString(name))


      do {
        price = prompt('Сколько это будет стоить?')
      } while (!appData.isNumber(price))

      appData.services[name] = +price
    }

    appData.adaptive = confirm('Нужен ли адаптив на сайте?')

  },
  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price
    }

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key]
    }
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  isString: function (str) {
    return !isNaN(parseFloat(str)) && isFinite(str);
  },
  getFullPrice: function () {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices
  },
  getTitle: function (title) {
    appData.title = appData.title.trim().charAt(0).toUpperCase() + appData.title.trim().slice(1).toLowerCase()
  },
  getServicePercentPrice: function () {
    appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
  },
  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return 'Даем скидку в 10%'
    } else if (price >= 15000 && price < 30000) {
      return 'Даем скидку в 5%'
    } else if (price >= 0 && price < 15000) {
      return 'Скидка не предусмотрена'
    } else {
      return 'Что-то пошло не так'
    }
  },
  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
  }
}




appData.start();
