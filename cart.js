const fruits = require('./fruits');

/* refactor this cart into a function with prototype methods  
let cart = [];
const addItem = function (item) {
  cart.push(item)
};
*/
/* Prototype Cart */

function Cart() {
  this.items = []
}

Cart.prototype.add = function(item) {
  this.items.push(item)
  console.log(`${item.name} added to cart`)
}
Cart.prototype.remove = function(item) {
  const index = this.items.indexOf(item)
  this.items.splice(index, 1)
  console.log(`${item.name} removed from cart`)
}
