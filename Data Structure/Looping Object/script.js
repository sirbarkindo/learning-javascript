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



// Created E.g

// const me = {
    //     name:'Muhammad',
    //     surname: 'Usman',
    //     age: 22,
    //     stateVisited : ['Kano', "Katsina", 'Jigawa', 'Adamawa', 'Maiduguri', 'Gombe', 'Bauchi'],
    // };
    
    // const properties = (Object.keys(me));
    
    // for (const obj of properties) {
        //     console.log(obj);
        
        // }


const properties = Object.keys(openingHours) 
   console.log(properties);
    
let openStr = `We are open on ${properties.length} days:`; 
        
 for (const day of properties) {
        openStr += `${day}, `;
                         
        }
 console.log(openStr);
                

//  Property Values

const values = Object.values(openingHours);
        console.log(values);


        // Entries Objeect
   const entries = Object.entries(openingHours);
        console.log(entries);


        // [key, Value ]
        for (const [key, {open, close}] of entries) {
            console.log(`On ${key} we open at ${open} and close at ${close}`);
            
        }
        


        
        
                
                    