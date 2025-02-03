'use strict';

//  FIRST LECTURE

// const airline = 'Tap Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('Max Air' [4]);


// console.log(airline.length);

// // INDEX METHOD ON STRING

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// // SLICE METHOD

//    console.log(airline.slice(4));
//    console.log(airline.slice(4, 7));
//    console.log(airline.slice(0, airline.indexOf(' ')));
//    console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// //    Negetive values start extracting from the end

// console.log(airline.slice(-5));
// console.log(airline.slice(1, -1));


// const checkMiddleSeat = function(seat) {
//     //  B and E are middle seat
//      const s = seat.slice('-1');
//      const a = s === 'B' || s ==='E' ? 'Middle seat secured' : 'Sorry😒' 
     
//      console.log(a);
     
// }

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');


//  SECOND LECTURE

const airline = 'AZMAN Air line';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'baRKindo';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

// Fix Name Function

function fixName(name) {
   const nameLower = name.toLowerCase();
    const correctName = nameLower[0].toUpperCase() + nameLower.slice(1);
    
    console.log(correctName);
    
}
fixName('barkindo');
fixName('MuHaMMaD');
fixName('aLIYU');

// Check Emai

const email = 'sirbarkindo@gmail.com';
const loginEmail = ' Sirbarkindo@gmail.com \n';

// const lowerEmail = loginEmail.toLowerCase();


// Trim Method: Removes the leading and trailing white space and line terminator characters from a string.

// const correctEmail = lowerEmail.trim();
// console.log(correctEmail);

const normalEmail = loginEmail.toLowerCase().trim();
console.log(normalEmail);

console.log(email === normalEmail);

const priceGb = '288,798#';
const priceUs = priceGb.replace('#', '$').replace(',', '.');

console.log(priceUs);

const announcement = 'All the passengers come to boarding door 23. boarding door 23';
console.log(announcement.replaceAll('door', 'gate'));

// Using Regular expression

console.log(announcement.replace(/door/g, 'gate'));


// BOOLEANS

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));

console.log(plane.startsWith('Air'));

if(plane.startsWith('Airbus') && plane.endsWith('neo')) {
    console.log("Part of the Airbus Family");
    
}

// PRACTICE

function checkBaggage(items) {
    const baggage = items.toLowerCase();

    if(baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are not allowed on board');
        
    }else {
        console.log('Welcome aboard!');
        
    }
}

checkBaggage('I have Laptop a Mini Gun and a robot');
checkBaggage('I have food and a pocket Knife');



//  Third Lecture

//   Split

console.log('a + very + nice + String'.split('+'));

const [firstName, lastName] = 'Muhammad Barkindo'.split(' ');

const newName = ['Mr.', firstName, lastName.toLocaleUpperCase()].join(' ');
console.log(firstName);
console.log(lastName);
console.log(newName);



function capitalizeName(name) {
    const names = name.split(' ');
    const namesUpper = [];
    
    for (const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1));

        namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
        
    }
    console.log(namesUpper.join(' '));
    
}

    capitalizeName('muhammad usman barkindo');


    // Padding 

    const message = 'GO to gate 23';
    console.log(message.padStart(25, '+').padEnd(35, '+'));
    console.log('Barkindo'.padStart(25, '+').padEnd(40 ,'+')); 

    const maskCreditCard = function(number) {
        const str = number + '';
        const last = str.slice(-4);

        return last.padStart(str.length, '*');
    }

    console.log( maskCreditCard(123456789));  
    console.log(maskCreditCard('muhammdbarkindo'));


    // Repeat

    const weatherMessge = ('Bad Weather... All Departures Delayed... ' + '\n' )
    console.log( weatherMessge.repeat(5));


    const planeInline = function(n) {
        console.log(`There are ${n} planes waiting inline ${'✈️'.repeat(n)}`);
        
    }

    planeInline(5);
    planeInline(10);



    //  Last Lecture

    const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

    const getCode = str => str.slice(0, 3).toUpperCase()
   for (const flight of flights.split('+')) {
    const [type, from, to, time] = flight.split(';');
    const output = `${type.startsWith('_Delayed') ? '🛑' : ''} ${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h').toUpperCase()} )`.padStart(36);
        console.log(output);
        
   }
    
  













   
   
   
    









