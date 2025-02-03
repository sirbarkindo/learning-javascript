"use strict";

const runOnce = function () {
  console.log("This will run again");
};

runOnce();

// immediately invoked function expression(IIFE)

(function () {
  console.log("This will only run once!");

  const isPrivate = 23;
})();

(() => console.log('This will also run once'))();






