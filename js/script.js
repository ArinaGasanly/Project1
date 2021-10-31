const title = document.getElementsByTagName('h1')[0];
const buttonsCount = document.getElementsByClassName('.handler_btn');

const startBtn = document.getElementsByClassName('.handler_btn')[0]
const resetBtn = document.getElementsByClassName('.handler_btn')[1]

const btn = document.querySelector('.screen-btn');

const percentValue = document.querySelectorAll('.other-items.percent');
const numberValue = document.querySelectorAll('other-items.number');

const total = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOther = document.getElementsByClassName('total-input')[2]
const fullTotalCount = document.getElementsByClassName('total-input')[3]
const totalCountRollback = document.getElementsByClassName('total-input')[4]

let screenBlocks = document.querySelectorAll('.screen');


const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 30,
  ServicePricesPercent: 0,
  ServicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  init: function () {
    appData.addTitle()

    startBtn.addEventListener('click', appData.start)
    btn.addEventListener('click', appData.addCopiedBlocks)
  },
  addTitle: function () {
    document.title = title.textContent
  },
  start: function () {
    alert('Старт')
    appData.addScreenBlocks()
    appData.addServices()
    appData.addPrices();
    //appData.getServicePercentPrice();

    //appData.logger();
    appData.showResult()
  },
  showResult: function () {
    total.value = appData.screenPrice
    totalCountOther.value = appData.screenPricesPercent + appData.screenPricesNumber
    fullTotalCount.value = appData.fullPrice
  },
  addCopiedBlocks: function () {
    const cloneScreen = screenBlocks[0].cloneNode(true)

    screenBlocks[screenBlocks.length - 1].after(cloneScreen)
  },
  addScreenBlocks: function () {
    screenBlocks = document.querySelectorAll('.screen');

    screenBlocks.forEach(function (screen, index) {
      const select = screen.querySelector('select')
      const input = screen.querySelector('input')
      const selectName = select.options[select.selectedIndex].textContent

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value
      })
    })

  },
  addServices: function () {
    percentValue.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]')
      const label = item.querySelector('label')
      const input = item.querySelector('input[type=text]')

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value
      }
    })

    numberValue.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]')
      const label = item.querySelector('label')
      const input = item.querySelector('input[type=text]')

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value
      }
    })
  },
  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price
    }

    for (let key in appData.servicesPercent) {
      appData.ServicePricesPercent += appData.screenPrice - (appData.servicesPercent[key] / 100)
    }

    for (let key in appData.servicesNumber) {
      appData.ServicePricesNumber += appData.servicesNumber[key]
    }

    appData.fullPrice = +appData.screenPrice + appaData.servicePricesPercent + appaData.servicePricesNumber
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




appData.init();