"use strict";

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");

  return [first.toUpperCase(), ...others].join(" ");
};

// HIGHER ORDER FUNCTION

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("Javacript is the best!", upperFirstWord);

transformer("JavaScript is the Best!", oneWord);

function high5() {
  console.log("👋Hi");
}

document.body.addEventListener("click", high5);

["Elon", "Mark", "Jeff", 'Mukesh'].forEach(high5);

// FUNCTION THAT RETURN ANOTHER FUNCTION

function greet(greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
}

const greetHey = greet("hey");

greetHey("bill gate");
greetHey("Elon musk");

// can be called using

greet("Hello")("Jeff bezos");

//  USING ARROW FUNCTION

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greetArrow = greetArr("hey");
greetArrow("bill gate");
greetArrow("Elon musk");
greetArr("Hello")("Jeff bezos");
