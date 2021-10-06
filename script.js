// 4 урок

// 1)
let getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
};

let AllServicePrices = getAllServicePrices(servicePrice1, servicePrice1);


// 2)
function getFullPrice() {
  return screenPrice + AllServicePrices;
}

let FullPrice = getFullPrice(screenPrice, AllServicePrices);


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
let ServicePercentPrices = getServicePercentPrices(fullPrice, 100, 70);

//5)
screens = ['Простые', 'Сложные', 'Интерактивные'];
console.log(String(screens).split(","));

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






