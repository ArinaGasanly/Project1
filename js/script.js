'use strict'
const title = document.getElementsByTagName("h1")[0];
const btnPlus = document.querySelector('.screen-btn');

const percentValue = document.querySelectorAll('.other-items.percent');
const numberValue = document.querySelectorAll('other-items.number');

const inputRange = document.querySelector('.rollback input');
const inputRangeValue = document.querySelector('.rollback .range-value');

const startBtn = document.getElementsByClassName("handler_btn")[0]
const resetBtn = document.getElementsByClassName("handler_btn")[1]


const total = document.getElementsByClassName("total-input")[0]
const totalCount = document.getElementsByClassName("total-input")[1]
const totalCountOther = document.getElementsByClassName("total-input")[2]
const fullTotalCount = document.getElementsByClassName("total-input")[3]
const totalCountRollback = document.getElementsByClassName("total-input")[4]


let screens = document.querySelectorAll('.screen');



const appData = {
  isError: false,
  title: '',
  screens: [],
  screensNumber: 0,
  screenPrice: 0,
  adaptive: true,
  rollback: 30,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  servicesPercent: {},
  servicesNumber: {},

  init: function () {
    this.addTitle();
    startBtn.addEventListener('click', (event) => {
      event.preventDefault();
      appData.isError = false;
      this.testedScreenField();
    })

    resetBtn.addEventListener('click', (event) => {
      event.preventDefault();
      appData.isError = false;
      this.reset();

    });

    btnPlus.addEventListener('click', this.addScreenBlock);
    inputRange.addEventListener('input', this.getRollbackPercent);
  },

  getRollbackPercent: function (event) {
    inputRangeValue.textContent = event.target.value + '%';
    appData.rollback = event.target.value;
  },

  addTitle: function () {
    document.title = title.textContent
  },

  showAttribute: function() {
    screens = document.querySelectorAll('.screen')

    screens.forEach((screen) => {
      const input = screen.querySelector('input')
      const select = screen.querySelector('select')

      input.setAttribute('disabled', 'diabled')
      select.setAttribute('disabled', 'diabled')
  })

  },

  includeResetBtn: function() {
    startBtn.style.display = "none";
    resetBtn.style.display = "";
  },

  includeStartBtn: function () {
    resetBtn.style.display = "none";
    startBtn.style.display = "";
  },


  removeTested: function () {
    const customCheckbox = document.querySelectorAll('.custom-checkbox');
    customCheckbox.forEach((input) => {
      if (input.checked == true) {
        input.checked = false;
      }
    })
  },

  removeAttribute: function() {
    screens = document.querySelectorAll('.screen')

    screens.forEach((screen, index) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input')
      select.removeAttribute('disabled')
      input.removeAttribute('disabled')

      if (index > 0) {
        screen.remove()
      }

      delete appData.screens[index]
      input.value = "";
      select.selectedIndex = 0;
    })
  },

  resetResults: function () {
    total.value = 0;
    totalCount.value = 0;
    totalCountOther.value = 0;
    fullTotalCount.value = 0;
    totalCountRollback.value = 0;
    inputRange.value = 0;
    inputRangeValue.textContent = 0;
    this.fullPrice = 0;
    this.screens = [];
    this.servicePricesPercent = 0;
    this.servicePricesNumber = 0;
    this.screensNumber = 0;
    this.screenPrice = 0;
    this.rollback = 30;
    this.servicePercentPrice = 0;
    this.servicesPercent = {};
    this.servicesNumber = {};
  },

  testedScreenField: function () {
    screens = document.querySelectorAll('.screen')
    screens.forEach((screen) => {
      const select = screen.querySelector('select')
      const input = screen.querySelector('input').value
      const selectName = select.options[select.selectedIndex].textContent

      if (input === '' || selectName === 'Тип экранов') {
        console.log('незаполненная строка');
        appData.isError = true;
      }

    })

    if (!this.isError) {
      this.start();
      this.includeStartBtn();
      this.includeResetBtn()
    }
  },

  start: function () {
    this.addScreens()
    this.addServices()
    this.addPrices()

    //this.logger();
    this.showResult()
  },

  reset: function () {
    this.includeStartBtn();
    this.removeTested();
    this.resetResults();
    this.removeAttribute();
  },

  showResult: function () {
    total.value = appData.screenPrice
    totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber
    fullTotalCount.value = appData.fullPrice
    totalCountRollback.value = appData.servicePercentPrice
    totalCount.value = appData.screensNumber

  },

  addScreens: function () {
    screens = document.querySelectorAll('.screen');

    screens.forEach((screen, index) => {
      const select = screen.querySelector('select')
      const input = screen.querySelector('input')
      const selectName = select.options[select.selectedIndex].textContent

      this.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        counts: +input.value,
      })
    })
  },

  addServices: function () {

    percentValue.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]')
      const label = item.querySelector('label')
      const input = item.querySelector('input[type=text]')

      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value
      }
    })

    numberValue.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]')
      const label = item.querySelector('label')
      const input = item.querySelector('input[type=text]')

      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value
      }
    })
  },
  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);

    screens[screens.length - 1].after(cloneScreen)
  },

  addPrices: function () {
    for (let screen of this.screens) {
      this.screenPrice += +screen.price
    }

    for (let value of this.screens) {
      this.screensNumber += +value.counts
    }

    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key]
    }

    for (let key in this.servicesPercent) {
      this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100)
    }

    appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;

    appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
  },
  logger: function () {
    console.log(this.fullPrice);
    console.log(this.servicePercentPrice);
    console.log(this.screens);
  },
}


appData.init();





