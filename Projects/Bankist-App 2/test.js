'use strict';

// console.log(23 === 23.0);
// console.log(0.1 + 0.2 === 0.3);

// //  Convert String to Number
// console.log(+'23' === 23);

// // Parsing(Reading value out of string)
// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('m30px')); // can't work it should start with a num
// console.log(Number.parseFloat('2.5rem'));

// //  Checking if value isNaN
// console.log(Number.isNaN(20));
// console.log(Number.isNaN(+'20x'));
// console.log(23 / 0);

// // checking if value is a num
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'30px'));
// console.log(Number.isFinite(23 / 0));

// //  Checking if value isInteger
// console.log(Number.isInteger(23));
// console.log(Number.isInteger(23.4));

// //  Math and Ronding

// Math
// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));
// console.log(Math.max(15, 50, 11, 32, 22));
//  // Cal Radius
// console.log(Math.PI * Number.parseFloat('10px') ** 2);
// console.log(Math.floor( Math.random() * 6) + 1);

// // Creating a Random Number between A (MIN & MAX)

// const randomInt = (min, max) =>
//     Math.floor(Math.random() * (max - min) + 1) + min;

// console.log(randomInt(10, 20));

//// Rounding Integers

// console.log(Math.round(23.3));
// console.log(Math.round(23.9));

// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.9));

// console.log(Math.floor(23.3));
// console.log(Math.floor(23.9));

// console.log(Math.trunc(23.3));
// console.log(Math.trunc(23.9));

// console.log(Math.floor(-23.3));
// console.log(Math.trunc(-23.3));

// // Rounding to floating point
// console.log((2.7).toFixed(0));
// console.log((4.779029).toFixed(3));
// console.log((2.7).toFixed(2));
// console.log(+(3.142).toFixed(0));

////  Reminder Operator

// console.log(5 % 2); // 1
// console.log(5 / 2); // 2.5

// function evenOrOdd(num) {
//     const ans = num % 2 === 0 ? 'Even' : 'odd';

//     return ans;
// }

// console.log(evenOrOdd(20));

// // Numeric Separators

// Adding underscore for more readerbility
// const diameter = 287_460_000_000;
// console.log(diameter);

// const price = 234_90;
// console.log(price);

// console.log(+'230_000');// will not work

// // BigInt

// // Safe Numbers in js
// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);

//  // Not Safe Numbers
// console.log(2 ** 53 + 2);

// // BigInt
// console.log(2129039291938483920283833n);
// console.log(BigInt(2129039233));

// const huge = 23221122222311n;
// const num = 10;

// // Bigint exception
// console.log(huge * BigInt(num));
// console.log((20n > 15));
// console.log(20n === 20);
// console.log(20n + 'is Really Big');

// //Division
// console.log(10n / 3);
// console.log(10 / 3);

//  Working with Date in javascript
// const now = new Date();
// console.log(now);

// console.log(new Date('Apr 24 2003'));
// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth() + 1);
// console.log(future.getDay());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());

// console.log(future.getTime());
// console.log(new Date(2142253380000));

// console.log(Date.now());
// future.setFullYear(2040);
// console.log(future);

// const future = new Date(2037, 10, 19, 15, 23);

// console.log(+future);

// const calcDaysPassed = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 86400);

// const day1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 14));

// console.log(day1);

// // Internationalizing Numbers

// const num = 3884764.23;

// const options = {
//   style: 'currency',
//   unit: 'celsius',
//   currency: 'EUR',
//     useGrouping: false,

// };

// console.log('9ja: ', new Intl.NumberFormat('en-NG', options).format(num));
// console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
// console.log(
//   navigator.language,
//   new Intl.NumberFormat(navigator.language, options).format(num)
// );

//// Timers
// setTime

const ingredients = ['chicken','']

 const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is Your Pizza with ${ing1} and ${ing2}🍕`),
  5000,
  ...ingredients
);

console.log('Waiting...');

if (ingredients.includes('spanich')) clearTimeout(pizzaTimer);

// SetInterval

setInterval(function () {
  const now = new Date();
  // console.log(now);
  
},1000)