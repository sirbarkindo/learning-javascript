"use strict";

const restaurant = {
    name: 'McDonald',
    location: 'Zoo Road kano Nigeria',
    categories: ['Italian', 'Mexican', 'Vegeterian', 'Organic'],
    starterMenu: ['Tuwo', 'Beans', 'Yam', 'sweet potato', 'Fish'],
    mainMenu: ['pizza', 'pasta', 'Shawarma'],
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};


// Array Destructuring.

const arr = [2, 3, 4];
const [a, b, c] = arr;

console.log(a, b, c);
// console.log(arr);

// First and second categories.
let [main, ,secondary] = restaurant.categories;     // to declare first and third block space shiuld bein the middle. 

console.log(main, secondary);
   

// SWITCHING VARIABLES

// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main]; 
console.log(main, secondary);

// Recieve 2 return values from a function.
const [first,  second] = restaurant.order(2, 0);
console.log(first, second);


// Nested Destructuring
const nested = [1, 2, [3, 4] ];
const [i, , [j, k]]  = nested;
console.log(i, j, k);

// Default Value
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);



 






