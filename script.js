//1) Следующим переменным присвоить значения
var title = "Lesson02";
var screens = ['Простые', 'Сложные', 'Интерактивные'];
var screenPrice = 756;
var rollback = 300;
var fullPrice = 25000;
var adaptive = true;

//Вывести в консоль тип данных значений переменных title, fullPrice, adaptive;
title = "Lesson02";
console.log(typeof title);

fullPrice = 250000;
console.log(typeof fullPrice);

adaptive = true;
console.log(typeof adaptive);

// Вывести в консоль тип данных значений переменных title, fullPrice, adaptive;
var screens = ['Простые', 'Сложные', 'Интерактивные'];
console.log(screens.length);

//Вывести в консоль “Стоимость разработки сайта (fullPrice) рублей/ долларов/гривен/юани”
var fullPrice = 25000;
var options1 = { style: 'currency', currency: 'RUB' };
var numberFormat1 = new Intl.NumberFormat('ru-RU', options1);
console.log(numberFormat1.format(fullPrice));

var options2 = { style: 'currency', currency: 'USD' };
var numberFormat2 = new Intl.NumberFormat('en-US', options2);
console.log(numberFormat2.format(fullPrice));


var options3 = { style: 'currency', currency: 'UAH' };
var numberFormat3 = new Intl.NumberFormat('uk-UK', options3);
console.log(numberFormat3.format(fullPrice));

var options4 = { style: 'currency', currency: 'CNY' };
var numberFormat4 = new Intl.NumberFormat('zh-ZH', options4);
console.log(numberFormat4.format(fullPrice));

// “Стоимость верстки экранов (screenPrice) рублей/ долларов/гривен/юани” 
var screenPrice = 756;
var options1 = { style: 'currency', currency: 'RUB' };
var numberFormat1 = new Intl.NumberFormat('ru-RU', options1);
console.log(numberFormat1.format(screenPrice));

var options2 = { style: 'currency', currency: 'USD' };
var numberFormat2 = new Intl.NumberFormat('en-US', options2);
console.log(numberFormat2.format(screenPrice));


var options3 = { style: 'currency', currency: 'UAH' };
var numberFormat3 = new Intl.NumberFormat('uk-UK', options3);
console.log(numberFormat3.format(screenPrice));

var options4 = { style: 'currency', currency: 'CNY' };
var numberFormat4 = new Intl.NumberFormat('zh-ZH', options4);
console.log(numberFormat4.format(screenPrice));


// Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль

var screens = "Простые', 'Сложные', 'Интерактивные";
console.log(screens.toLowerCase().split(","));

// Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))
var fullPrice = 25000;
var rollback = 300;
var result = rollback / 100;
console.log(fullPrice * result);