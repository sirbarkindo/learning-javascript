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
console.log(azman);

const book = azman.book;

const maxair = {
  airline: "Max-Air",
  iataCode: "MA",
  bookings: [],
};
console.log(maxair);

const airpeace = {
  airline: "Air-peace",
  iataCode: "AP",
  bookings: [],
};
console.log(airpeace);

//Revision on call and apply method
//  call-method
azman.book(23, "Bellingham");
azman.book();
book.call(airpeace, 89, "Guler");
book.call(maxair, 111, "vinijr");

// apply-method
const info = [412, "Diaz"];
book.apply(airpeace, info);

// apply-method (best-practice)

const tour = [121, "Modric"];
book.call(maxair, ...tour);

//**** BIND METHOD *****/

const bookMA = book.bind(maxair);
const bookAZ = book.bind(azman);
const bookAP = book.bind(airpeace);
bookMA(87, "Mbappe");
bookAP(19, "yamal");
bookAZ(9, "Jamal");

// can also be written like this ⬇️
const bookAP09 = book.bind(airpeace, 90);
bookAP09("Ancelotti");
bookAP09("Perez");

// with event listeners

azman.planes = 300;
azman.buyplane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", azman.buyplane.bind(azman));

// Partial Application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));

function addTaxRate(rate) {
  return function (value) {
    return value + value * rate;
  };
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
