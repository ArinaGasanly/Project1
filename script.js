// Следующим переменным присвоить значения
let title = "Lesson02";
let screens = ['Простые', 'Сложные', 'Интерактивные'];
let screenPrice = 756;
let rollback = 300;
let fullPrice = 25000;
let adaptive = true;


//Вывести в консоль тип данных значений переменных title, fullPrice, adaptive;

title = "Lesson02";
console.log(typeof title);


fullPrice = 250000;
console.log(typeof fullPrice);


adaptive = true;
console.log(typeof adaptive);

// Вывести в консоль тип данных значений переменных title, fullPrice, adaptive;
let screens = ['Простые', 'Сложные', 'Интерактивные'];
console.log(screens.length);

//Вывести в консоль “Стоимость разработки сайта (fullPrice) рублей/ долларов/гривен/юани”

console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'RUB' }).format(fullPrice));

console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(fullPrice));

console.log(new Intl.NumberFormat('uk-UK', { style: 'currency', currency: 'UAH' }).format(fullPrice));

console.log(new Intl.NumberFormat('zh-ZH', { style: 'currency', currency: 'CNY' }).format(fullPrice));


// “Стоимость верстки экранов (screenPrice) рублей/ долларов/гривен/юани” 
console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'RUB' }).format(screenPrice));

console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(screenPrice));

console.log(new Intl.NumberFormat('uk-UK', { style: 'currency', currency: 'UAH' }).format(screenPrice));

console.log(new Intl.NumberFormat('zh-ZH', { style: 'currency', currency: 'CNY' }).format(screenPrice));

// Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль
let screens = "Простые', 'Сложные', 'Интерактивные";
console.log(screens.toLowerCase().split(","));

// Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))
let fullPrice = 25000;
let rollback = 300;
let result = rollback / 100;
console.log(fullPrice * result);

