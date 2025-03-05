// importing module
// import {addToCart, totalPrice, totalQuantity} from './shopingCart.js';
// console.log('Importing Module');

// addToCart('Bread', 10);

// console.log(totalPrice, totalQuantity)

// import * as ShoppingCart from './shopingCart.js'

// ShoppingCart.addToCart('Bread', 10);
// console.log(ShoppingCart.totalQuantity, ShoppingCart.totalPrice)

// import add from './shopingCart.js';
// add('Burger', 10);



// console.log('Start');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts')

// const data = await res.json();

// console.log(data);
// console.log('Something');



const ShoppingCart2 = (function () { 
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 273;
    const totalQuantity = 23;

    function addToCart(product, quantity) {
        cart.push(product, quantity);
        console.log(`${quantity} ${product} are added to cart`);
        
    }

        function orderStock(product, quantity) {
          console.log(`${quantity} ${product} ordered from supplier`);
    }

    return {
        addToCart,
        orderStock,
        cart,
        totalPrice,
        totalQuantity,
    }
    


}())

ShoppingCart2.addToCart('Burger', 10);
ShoppingCart2.orderStock('Rice', 4);

 