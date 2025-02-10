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

// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');

// console.log(account);

// console.log(movements);

// // (Includes()): Equality only
// console.log(movements.includes(-130));

//  SOME() method: check for condition

const anyDeposit = movements.some(mov => mov < 0);
// console.log(anyDeposit);

// EVERY: test all condition before returning

// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// // SEPARATE CALLBACK

const deposits = mov => mov > 0;

// console.log(movements.some(deposits));
// console.log(movements.filter(deposits));
// console.log(movements.every(deposits));

// // FLAT() method: flatten arrays 1 level deep

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

// console.log(arr.flat());

const arrDeep = [[[1, 2, [0, 0]], 3], [4, [[1, 1], 5, 6]], 7, 8];

// console.log(arrDeep.flat(Infinity));

const overall = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

// console.log(overall);

// FlatMap()

const overall2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

// console.log(overall2);

// SORTING METHOD

const arrSort = ['Bill', 'Jonas', 'Barkindo', 'Jeff', 'Elon'];
// console.log(arrSort.sort());

// console.log(movements);

// ASSENDING ORDER
movements.sort((a, b) => a - b);
// console.log(movements);

// DESENDING ORDER
movements.sort((a, b) => b - a);

// console.log(movements);

//  filling method()

const x = new Array(100);
x.fill(1, 3, 6);

// console.log(x);

const y = Array.from({ length: 7 }, () => 1);

// console.log(y)

const z = Array.from({ length: 7 }, (_, i) => i + 1);

const random = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 100)
);

// console.log(random);

// // ==== not functional (only in the final project)  : displaying array from UI ==== //

//   // first method
// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => +el.textContent.replace('₤', '')
//   );

//   console.log(movementsUI)

//     // Second Method
//   const movementsUI2 = [...document.querySelectorAll('.movements__value')].map(
//     el => +el.textContent.replace('₤', '')
//   );
//   console.log(movementsUI2);

// });

// =====  ARRAY METHOD PRACTICE (Exercise) ==== //

// 1. summing all the deposits
const bankDepoitSum = accounts
  .flatMap(curr => curr.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);

// console.log(bankDepoitSum);

// 2. length of deposits >= 1000

const bankDepoitAtleast = accounts
  .flatMap(mov => mov.movements)
  .filter(mov => mov >= 1000).length;

// console.log(bankDepoitAtleast);

// length of deposits >= 1000 using reduce()

const bankDepoitAtleastReduce = accounts
  .flatMap(a => a.movements)
  .reduce((count, curr) => (curr >= 1000 ? ++count : count), 0);

// console.log(bankDepoitAtleastReduce);

// 3.

const { entered, removed } = accounts
  .flatMap(mov => mov.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.entered += cur) : (sums.removed += cur); OR
      sums[cur > 0 ? 'entered' : 'removed'] += cur;

      return sums;
    },
    { entered: 0, removed: 0 }
  );

// console.log(entered, removed);

// 4.

function convertTitleCase(title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = [
    'a',
    'an',
    'is',
    'and',
    'with',
    'but',
    'the',
    'on',
    'in',
    'or',
  ];

  const convertTitle = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(convertTitle);
}

// console.log(convertTitleCase('this is a nice tittle'));
// console.log(convertTitleCase('this is a LONG but Not TOO long'));
// console.log(convertTitleCase('and this is also LONG but Not TOO long'));

// ====== CODING CHALLENGE 4 ===== //

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  {
    weight: 13,
    curFood: 250,
    owners: ['Sarah', 'John'],
  },
  { weight: 32, curFood: 340, owners: ['Micheal'] },
];

// 1.

dogs.forEach(dog => (dog.recFood = Math.floor(dog.weight ** 0.75 * 28)));

console.log(dogs);

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));

console.log(dogSarah);

console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'Much' : 'little'
  } `
);

// 3.

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .map(dog => dog.owners)
  .flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .map(dog => dog.owners)
  .flat();
console.log(ownersEatTooMuch);

// 4.

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);

console.log(` ${ownersEatTooLittle.join(' and ')}'s dogs eat little`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));


// 6.
const checkEatingOk = dog => dog.curFood >= dog.recFood * 0.9 && dog.curFood >= dog.recFood * 1.1;
console.log(dogs.some(checkEatingOk));

// 7.

console.log(dogs.filter(checkEatingOk));

// 8.

const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);

console.log(dogsSorted);




