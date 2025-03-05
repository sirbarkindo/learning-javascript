// Exporting
console.log('Exporting Module');

const shippigCost = 10;

const cart = [];

export function addToCart(product, quantity) {
    cart.push(product, quantity);
    console.log(` ${quantity} ${product} are added to cart`);
    
}

const totalQuantity = 27;
const totalPrice = 30;

export { totalQuantity, totalPrice };


// Export Defaut

export default function(product, quantity) {
  cart.push(product, quantity);
  console.log(` ${quantity} ${product} are added to cart`);
}