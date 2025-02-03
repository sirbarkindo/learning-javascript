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

if (restaurant.openingHours && restaurant.openingHours.mon) 
    console.log(restaurant.openingHours.mon.open);

// WITH OPTIONAL CHAINING

console.log(restaurant.openingHours.mon?.open);


// EXAMPLE

const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

for(const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day}, we open at ${open}`);
    
}


//  Optional Chaining on method

    console.log(restaurant.order?.(0, 2) ?? 'Method does not Exist');
    console.log(restaurant.orderShawarma?.(0, 1) ?? 'Method does not Exist');
    
    
    
    // Optional Chaining on Array

    const user = [{name: 'Barkido', email: 'moh@gmail.com' }];

    console.log(user[0]?.name ?? 'User Array Empty');

    //  Without optional chaining

    if (user.length === 1) 
    console.log(user[0].name);
    else console.log('User Array Empty');