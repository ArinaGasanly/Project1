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
  asking: function () {
    appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки')
    appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные')

    do {
      appData.screenPrice = prompt('Сколько будет стоить данная работа?')
    } while (!appData.isNumber(appData.screenPrice))

    appData.adaptive = confirm('Нужен ли адаптив на сайте?')

  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
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
      } while (!appData.isNumber(value))

      sum += Number(value)
    }

    return sum
  },
  getFullPrice : function () {
    return +appData.screenPrice + appData.allServicePrices
  }, 
  getTitle : function (title) {
    return appData.title.trim().charAt(0).toUpperCase() + appData.title.trim().slice(1).toLowerCase()
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
  start: function () {
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.getFullPrice();
    appData.title = appData.getTitle;
    appData.servicePercentPrice = appData.getServicePercentPrices();
    appData.logger();
  },
  logger: function () {
    for (let key in appData) {
         console.log(key);
    };
  }
}



appData.start();


