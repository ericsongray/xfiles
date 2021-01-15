Great job on completing the first two parts of this project. We have packaged our fruit and created a way to add them to cart. Next we need to create a 
checkout process. In your next task you will create a `Checkout` module using
the same skills you've already acquired.

In the checkout process you will simulate a real life scanner with line items.
We need to scan each item in the cart and use this data to eventually print a receipt. So for now our `Checkout` class will need two functions. `scanItems()` will of course scan each item and `scanner` will store the line items. 

### Checkout functions
* `checkout.scanItems()`
* `checkout.scanner`

### Scan Items API
```
> checkout.scanItems(cart.items)
3 items scanned
```

### Scanner API
```
> checkout.scanner
{
  itemRows: {
    '1': {
      id: 1,
      name: 'apple',
      image: '🍎',
      price: 0.99,
      qty: 2,
      total: '1.98'
    },
    '7': { id: 7, name: 'pear', image: '🍐', price: 0.89, qty: 1 }
  },
  total: 2.87,
  itemsScanned: 3
}
```
