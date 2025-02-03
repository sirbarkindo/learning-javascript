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
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for(const item of menu) console.log(item)

    for(const [i, el]of menu.entries()) {
        console.log(`${i + 1}: ${el}`);
    };

    // console.log(...menu.entries());
    
