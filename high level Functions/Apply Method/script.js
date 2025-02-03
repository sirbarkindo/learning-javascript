"use strict";

const azman = {
  airline: "Azman",
  iataCode: "AZ",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

azman.book(234, "Aliyu Shehu");
azman.book(567, "Muhammad Usman");

const maxair = {
  airline: "Max-Air",
  iataCode: "MA",
  bookings: [],
};

const book = azman.book;

//  Call Method
book.call(maxair, 345, "Raymond Reddington");
console.log(maxair);

book.call(azman, 890, "Mosh Hamedani");
console.log(azman);

const airpeace = {
  airline: "airpeace",
  iataCode: "AP",
  bookings: [],
};

book.call(airpeace, 435, "Asiwaju Bola");
console.log(airpeace);

// Apply Method
const flightData = [567, "Jeff Bezos"];
book.apply(airpeace, flightData);
console.log(airpeace);

// Another word
const data = [321, 'Donald Trump'];

book.call(airpeace, ...data);
console.log(airpeace);
