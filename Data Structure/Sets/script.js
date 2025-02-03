'use strict';

 const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

const openingHours = {
    [weekdays[3]]: {
        open:12,
        close:22,
 },
    [weekdays[4]]: {
        open: 11,
        close: 23,
},
    [weekdays[5]]: {
        open: 0, //open 24hrs
        close: 24,
    },


};

const restaurant = {
    name: 'McDonald',
    location: 'Zoo Road kano Nigeria',
    categories: ['Italian', 'Mexican', 'Vegeterian', 'Organic'],
    starterMenu: ['Tuwo', 'Beans', 'Yam', 'sweet potato', 'Fish'],
    mainMenu: ['pizza', 'pasta', 'Shawarma'],

// ES6 enhanced object literal
    openingHours,

    
    order (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    // orderDelivery: function({starterIndex, mainIndex, address, time}) {
    //     console.log(
    //     `order recieved!${this.starterMenu[starterIndex]} 
    //      and ${this.mainMenu[mainIndex]} will be delivered
    //     to ${address} at ${time}`);

    // },
    orderPasta (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    orderPizza (mainingredient, ...otherIngredient) {
      console.log(mainingredient);
      console.log(otherIngredient);      
        
    }
};

//  Set is a collection of unique values.

const ordersSet = new Set([
    'pasta', 
    'pizza',
    'pasta',
    'shawarma',
    'pizza',
    'shawarma',

 ]);

 console.log(ordersSet);

 console.log(new Set('Muhammad'));
 
console.log(ordersSet.size);

// Checking 
console.log(ordersSet.has('pizza'));
console.log(ordersSet.has('Bread'));

// Adding & deleting

ordersSet.add('Garlic Bread');
ordersSet.delete('shawarma')
// ordersSet.clear();
console.log(ordersSet);

//  Looping
for (const order of ordersSet) console.log(order);


//  Removing Dublicate Values and convertig set to array

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];

console.log(staffUnique);








        
        
                
                    