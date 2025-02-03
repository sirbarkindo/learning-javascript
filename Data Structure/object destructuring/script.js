"use strict";

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

    orderDelivery: function({starterIndex, mainIndex, address, time}) {
        console.log(
        `order recieved!${this.starterMenu[starterIndex]} 
         and ${this.mainMenu[mainIndex]} will be delivered
        to ${address} at ${time}`);

    },
};

restaurant.orderDelivery({
    time:'22:30',
    address: 'Nasarawa G.R.A',
    mainIndex: 1,
    starterIndex: 0,
});

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);


// Giving objects new variable name
const{name: restaurantName,
     openingHours: hours,
      categories: tags,
    } = restaurant;
    console.log(restaurantName, hours, tags);

    // Default Values
const {menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating Variables 

let a = 10;
let b = 20;
const obj = {a: 30, b: 40,  c: 50};

({a, b} = obj);


console.log(a, b);

// Nested objects 

const {fri: {open:o, close:c},} = openingHours;
console.log(o, c);



    


