## refactor this cart into a function with prototype methods
```
let cart = [];
const addItem = function (item) {
  cart.push(item)
};
```

## The api for the cart should have the following methods
* `cart.items()`
* `cart.add()` 
* `cart.remove()`

## Show items
```
> cart.items
[
  { id: 1, name: 'apple', image: '🍎', price: 0.99 },
  { id: 3, name: 'grapes', image: '🍇', price: 2.39 }
]
```

# Adding items
```
> cart.add(fruits.apple)
> apple added to cart
```

## Remove items
```
> cart.remove(fruits.apple)
> apple removed from cart
```

## Follow this tutorial on Prototypes to guide your cart design
[javascript prototypes](https://www.tutorialsteacher.com/javascript/prototype-in-javascript)




