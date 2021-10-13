//let rollback;
//let title;
//let screens;
//let screenPrice;
//let adaptive;
//let service1;
//let servicePrice1;
//let service2;
//let servicePrice2;
//let fullPrice;
//let servicePercentPrice;


const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  rollback: 30,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: '',
  service2: '',
  isNumber: '',
  start () {
    Object.defineProperty(asking.prototype, 'text', {
      get() {
        return asking()
      }
    });
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
  },
  asking: function () {
    appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки')
    appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные')

    do {
      appData.screenPrice = prompt('Сколько будет стоить данная работа?')
    } while (!isNumber(appData.screenPrice))

    appData.adaptive = confirm('Нужен ли адаптив на сайте?')

  },
  getAllServicePrices: function () {
    let sum = 0
    let value;

    for (let i = 0; i < 2; i++) {

      if (i === 0) {
        appData.service1 = prompt('Какой дополнительный тип услуги нужен?')

      } else if (i === 1) {
        appData.service2 = prompt('Какой дополнительный тип услуги нужен?')

      }

      do {
        value = prompt('Сколько это будет стоить?')
      } while (!isNumber(value))

      sum += Number(value)
    }

    return sum
  },
  getFullPrice : function () {
    return +appData.screenPrice + appData.allServicePrices
  }, 
  getTitle : function (title) {
    return appData.title.trim().charAt(0).toUpperCase() + title.trim().slice(1).toLowerCase()
},
  getServicePercentPrices : function () {
    return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
},
  getRollbackMessage : function (price) {
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
  logger : function () {
    for (let key in appData)
    console.log("Ключ:" + key + " = " + appData[key]);
    console.log(start());
  }
}




appData.isNumber()
appData.asking()
appData.allServicePrices = getAllServicePrices()
appData.getFullPrice()
appData.title = getTitle(appData.title)
appData.servicePercentPrices = getServicePercentPrices()
console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);


//let rollback;
//let title;
//let screens;
//let screenPrice;
//let adaptive;
//let service1;
//let servicePrice1;
//let service2;
//let servicePrice2;
//let fullPrice;
//let servicePercentPrice;


/*const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  rollback: 30,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: '',
  service2: '',
  asking: function () {
    appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки')
    appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные')

    do {
      appData.screenPrice = prompt('Сколько будет стоить данная работа?')
    } while (!isNumber(appData.screenPrice))

    appData.adaptive = confirm('Нужен ли адаптив на сайте?')

  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
  },
  getAllServicePrices: function () {
    let sum = 0
    let value;

    for (let i = 0; i < 2; i++) {

      if (i === 0) {
        appData.service1 = prompt('Какой дополнительный тип услуги нужен?')

      } else if (i === 1) {
        appData.service2 = prompt('Какой дополнительный тип услуги нужен?')

      }

      do {
        value = prompt('Сколько это будет стоить?')
      } while (!isNumber(value))

      sum += Number(value)
    }

    return sum
  },
  getFullPrice: function () {
    return +appData.screenPrice + appData.allServicePrices
  },
  getTitle: function (title) {
    return appData.title.trim().charAt(0).toUpperCase() + title.trim().slice(1).toLowerCase()
  },
  getServicePercentPrices: function () {
    return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
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
  }
}



appData.allServicePrices = getAllServicePrices()
appData.getFullPrice()
appData.title = getTitle(appData.title)
appData.servicePercentPrices = getServicePercentPrices()
appData.asking()
console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);
*/
