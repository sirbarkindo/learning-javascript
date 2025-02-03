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
    }
}
        

const arr = [6, 8, 10];

const bad = [2, 4, arr[0], arr[1], arr[2]];
console.log(bad);

const newArr =  [2, 4, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'burger']
console.log(newMenu);


// Joining two Arrays
const menu = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(menu);

// Spread operator on string
// it doesn't work on template literal.
const name = 'Barkindo';
const nameArr = [...name];
console.log(...name);
console.log(nameArr);

const ingredients = [prompt('let\s make pasta! ingredient 1?'),
                    prompt('let\s make pasta! ingredient 2?'),
                    prompt('let\s make pasta! ingredient 3?')       
];

restaurant.orderPasta(...ingredients);


// Object
const newRestaurant = {foundedIn:1998, ...restaurant, founder:'BARKINDO'};
console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Dominos pizza';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);rr

