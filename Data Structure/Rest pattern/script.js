'use strict';
const restaurant = {
    name: 'McDonald',
    location: 'Zoo Road kano Nigeria',
    categories: ['Italian', 'Mexican', 'Vegeterian', 'Organic'],
    starterMenu: ['Tuwo', 'Beans', 'Yam', 'sweet potato', 'Fish'],
    mainMenu: ['pizza', 'pasta', 'Shawarma'],
    openingHours: {
        thur: {
            open:12,
            close:22,
     },
        fri: {
            open: 11,
            close: 23,
    },
        sat: {
            open: 0, //open 24hrs
            close: 24,
        },


    },

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    // orderDelivery: function({starterIndex, mainIndex, address, time}) {
    //     console.log(
    //     `order recieved!${this.starterMenu[starterIndex]} 
    //      and ${this.mainMenu[mainIndex]} will be delivered
    //     to ${address} at ${time}`);

    // },
    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    orderPizza: function(mainingredient, ...otherIngredient) {
      console.log(mainingredient);
      console.log(otherIngredient);

        
        
    }
}

// Destructuring

//Spread because on the right handside of =

const ar = [1, 2, ...[3, 4]];

const [a, b, ...others] =  ar//[1, 2, 3, 4, 5,];
console.log(a, b, others);


const[pizza, , Shawarma, ...otherFoods] = [ 
    ...restaurant.mainMenu, ...restaurant.starterMenu
];

console.log(pizza, Shawarma, otherFoods);

// Object

const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

// 2) Functions

const add = function(...numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++)
        sum += numbers[i];
    console.log(sum);
    
};

add(2, 3);
add(4, 5, 6);
add(43, 22, 11, 33);


const x = [3, 4, 7];
add(...x);


// order pizza

restaurant.orderPizza('peperoni', 'onion', 'olives')

//  Short circuiting : use on (AND) and (OR) operator

console.log('----OR----');


console.log(3 || 'Barkindo');
console.log('' || 'Barkindo');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 
|| null);

// restaurant.numGuests = 23;

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log("----AND----");

console.log(0 && 'jonas');
console.log(10 && 'Moh');

console.log('Hi' && 50 && null && "Abba");

if(restaurant.orderPizza) {
    restaurant.orderPizza('Onion', 'Peperoni')
}

restaurant.orderPizza &&
 restaurant.orderPizza('Onion', 'peperoni')

//   Nullish Coalescingoperator: was introduced in ES2020

restaurant.numGuests = 0 ;

const guest = restaurant.numGuests || 10;
console.log(guest);

const guestCorrect = restaurant.numGuests ?? 18;
console.log(guestCorrect);















 