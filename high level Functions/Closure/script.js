"use strict";

function secureBooking() {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  };
}

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);






// EXAMPLE 1

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const a = 777;

  f = function () {
    console.log(a * 2);
  };
};

g();
f();
h();
f();


//  EXAMPLE 2

const boardPassengers = function (n, wait = wait*1000) {

    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`We are now  boarding all ${n} passengers`);
        console.log(`There are 3 group each with ${perGroup} passengers`);
    },  1000)

    console.log(`Will start boarding in ${wait} seconds`);
    
    
}

boardPassengers(180, 3);
