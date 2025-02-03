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


//  First Lecture on Map

// const rest = new Map();
// rest.set('name', 'Classico Italiano' );
// rest.set(1, 'Firenze, Italy');
//  console.log(rest.set(2, 'Lisbon Portugal'));

// rest.set('categories', ['Italian', 'Mexican', 'Vegeterian', 'Organic'])
//     .set('open', 11)
//     .set('close', 23)
//     .set(true, 'We are open :)')
//     .set(false, 'We are closed :(');

//     console.log(rest.get('name'));
//     console.log(rest.get(true));
//     console.log(rest.get(1));

//     const time = 21;
//    console.log(rest.get(time > rest.get('open') && time < rest.get('close') ));
   
//     Checking and Deleting

// console.log(rest.has('categories'));
// rest.delete(2);


// const arr = [1, 2];
// rest.set(arr, 'test');
// console.log(rest);
// console.log(rest.get(arr));
// console.log(rest.size);

// Using Map on Dom

// rest.set(document.querySelector('h1'), 'Heading');


//  Second Lecture on map

const question = new Map([
    ['question', 'What is the best programming language in the world'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'Javacript'],
    ['correct', 3],
    [true, 'Correct🎉'],
    [false, 'Try again!'],
]);

console.log(question);

// Converting object to map

console.log(Object.entries(openingHours));

const hoursMap= new Map(Object.entries(openingHours));
console.log(hoursMap);

// iteration on Map

console.log(question.get('question'));
for(const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);

}

const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));













    


        
        
                
                    