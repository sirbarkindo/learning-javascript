"use strict";

const flight = "AZ012";

const passengerInfo = {
  name: "Barkindo",
  passport: 7042548425,
}

function checkIn(flightNum, passenger) {
  flightNum = "QR0021";
  passenger.name = 'Mr. ' + passenger.name;

  if(passenger.passport === 7042548425) {

    alert('Checked-in');

  }else {
    alert('Wrong Passport!');
  }

}

checkIn(flight, passengerInfo);
console.log(flight);
console.log(passengerInfo);

function newPassport(number) {
  number.passport = Math.trunc(Math.random()*100000001);
 
 
}

newPassport(passengerInfo);
checkIn(flight, passengerInfo);




