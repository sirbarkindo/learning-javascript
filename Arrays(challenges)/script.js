'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
///====== LECTURES =======///

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE METHOD
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice()); // this and ⬇️
// console.log([...arr]); // this result thesame

// // SPLICE: Splice delete the original array

// console.log(arr.splice(2));
// console.log(arr);
// console.log(arr.splice(-1));

// // REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// let arr2 = ['j', 'i', 'h', 'g', 'f'];

// console.log(arr2.reverse());

// // CONCAT

// const letters = arr.concat(arr2);
// console.log(letters);

// // JOIN

// console.log(letters.join(' - '));

// //  At

// const arrAt = [23, 22, 63];

// console.log(arrAt[0]);
// console.log(arrAt.at(0));

// // GETTING LAST ELEMENT

// console.log(arrAt.length - 1);
// console.log(arrAt.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log('=== FOR-OF ===');

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1} You have Withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('---FOREACH---');

// movements.forEach(function (move, i, arr) {
//   if (move > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${move}`);
//   } else {
//     console.log(`Movement ${i + 1} You have Withdrew ${Math.abs(move)}`);
//   }
// });

//  forEach on maps

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// //   forEach on set

// const currenciesSet = new Set(['USD', 'GPB', 'EUR', 'EUR', 'NGN']);

// console.log(currenciesSet);

// currenciesSet.forEach(function (value, _, set) {
//   console.log(`${value}:${value}`);

// })

//==== CODING CHALLENGE 1 ====//

function checkDogs(juliasDog, katesDogs) {
  const juliasDogCorrect = juliasDog.slice();
  juliasDogCorrect.splice(0, 1);
  juliasDogCorrect.splice(-2);

  const allDogs = [...juliasDogCorrect, ...katesDogs];

  allDogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult🐕‍🦺 and is ${dog} years old!`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy🐶`);
    }
  });
}

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 10, 1, 2, 3], [5, 5, 15, 5, 4]);

//========== MAP METHOD ============//

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

//  USING FOR-OF
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);

// console.log(movementsUSDfor);

// const movementsDescription = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'Withdrew'} ${Math.abs(
//       mov
//     )}`
// );

// console.log(movementsDescription);

// ==========  FILTER =======//

const deposit = movements.filter(function (mov) {
  return mov > 0;
});
// console.log(movements);
// console.log(deposit);

const depositFor = [];

for (const mov of movements) if (mov > 0) depositFor.push(mov);

// console.log(depositFor);

// console.log(mov);

// WITHDRWALS

const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawalFor);

const withdrawalFor = [];
for (const mov of movements) if (mov < 0) withdrawalFor.push(mov);

// console.log(withdrawalFor);

// ==========   REDUCE METHOD ======= //

const balance = movements.reduce((acc, curr) => acc + curr, 0);

// console.log(balance);

// Using for-of //

let sum = 0;

for (const mov of movements) sum += mov;
// console.log(sum);

// GETTING MAXIMUM VALUE USING REDUCE

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

// console.log(max);

// ========= CODING CHALLENGE 2 ======== //

const calAverageHumanAge = function (...ages) {
  const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));

  const adults = humanAge.filter(age => age >= 18);
  // console.log(humanAge);
  // console.log(adults);

  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  return average;
};

const test1 = calAverageHumanAge(5, 2, 4, 1, 15, 8, 3);
const test2 = calAverageHumanAge(16, 6, 10, 5, 1, 4);

// console.log(test1, test2);

// CHAINING METHOD
const euroToUsd = 1.1;

// PIPELINE
const totalDepositsUsd = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUsd);

// ====== CODING CHALLENGE 3 ===== //

const calAverageHumanAgeArr = (...ages) =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const test = calAverageHumanAgeArr(5, 2, 4, 1, 15, 8, 3);
const test3 = calAverageHumanAgeArr(16, 6, 10, 5, 6, 1);

// console.log(test, test3);

// ======= FIND METHOD ====== //

const firstWithdrawal = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');

console.log(account);

