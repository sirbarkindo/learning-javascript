"use strict";

// Call Back

function hello(callback) {
 setTimeout(function () {
      console.log("Hello!");
    //   callback()
  }, 1000);
}

function goodbye() {
    setTimeout(function () {
        console.log("Goodbye!");
    },4000)
}

const wait = () => {
    setTimeout(function () {
        console.log('Wait');
    }, 3000)
    
}

const leave = () => {
    setTimeout(function () {
        console.log("Leave");
    },5000)
    
}

hello();
wait();
goodbye();
leave();

const display = document.querySelector('.display');

display.style.color = 'blue';