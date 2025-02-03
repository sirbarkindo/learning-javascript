// 'use strict';

// const restaurant = {
//     name: 'McDonald',
//     location: 'Zoo Road kano Nigeria',
//     categories: ['Italian', 'Mexican', 'Vegeterian', 'Organic'],
//     starterMenu: ['Tuwo', 'Beans', 'Yam', 'sweet potato', 'Fish'],
//     mainMenu: ['pizza', 'pasta', 'Shawarma'],
//     openingHours: {
//         thur: {
//             open:12,
//             close:22,
//      },
//         fri: {
//             open: 11,
//             close: 23,
//     },
//         sat: {
//             open: 0, //open 24hrs
//             close: 24,
//         },


//     },

//     order: function(starterIndex, mainIndex) {
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },

//     // orderDelivery: function({starterIndex, mainIndex, address, time}) {
//     //     console.log(
//     //     `order recieved!${this.starterMenu[starterIndex]} 
//     // //      and ${this.mainMenu[mainIndex]} will be delivered
//     // //     to ${address} at ${time}`);

//     // // },
//     // orderPasta: function(ing1, ing2, ing3) {
//     //     console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
//     // },

//     // orderPizza: function(mainingredient, ...otherIngredient) {
//     //   console.log(mainingredient);
//     //   console.log(otherIngredient);

        
        
//     // }
// }

const rest1 = {
    name: 'Capri',
    numGuests: 0,

};

const rest2 = {
    name: 'La piazza',
    owner: 'Giovanni Rossi',
}

// The OR assignmnt operator

// rest1.numGuests = rest1.numGuests || 10;  
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;


// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest1.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);





