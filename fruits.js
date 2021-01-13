/*
  You own a small fruit store. You just received a shipment of 
  various fruits. Your job is to package these fruits up. Each
  fruit needs to be packaged along with it's price. Think about
  what kind of Data Structure you would use to package the fruit.

  When you are finished packaging the fruit then create a simple
  shopping cart for your customers to add the fruit to.
 */

 /* Fruit Shipment */
 const apple = "🍎"
 const banana = "🍌"
 const grapes = "🍇"
 const pineapple = "🍍"
 const watermelon = "🍉"
 const lemon = "🍋"
 const pear = "🍐"
 const cherries = "🍒"
 const kiwi = "🥝"
 
 
 /* Package The Fruit */
 const fruits = {
   apple: {
     id: 1,
     name: 'apple',
     image: apple,
     price: 0.99
   },

   banana: {
     id: 2,
     name: 'banana',
     image: banana,
     price: 2.79
   },

   grapes: {
     id: 3,
     name: 'grapes',
     image: grapes,
     price: 2.39
   },

   pineapple: {
     id: 4,
     name: 'pineapple',
     image: pineapple,
     price: 2.99
   },

   watermelon: {
     id: 5,
     name: 'watermelon',
     image: watermelon,
     price: 2.99
   },

   lemon:{
     id: 6,
     name: 'lemon',
     image: lemon,
     price: 1.29
   },

   pear: {
     id: 7,
     name: 'pear',
     image: pear,
     price: 0.89
   },

   cherries: {
     id: 8,
     name: 'cherries',
     image: cherries,
     price: 1.29
   },

   kiwi:{
     id: 9,
     name: 'kiwi',
     image: kiwi,
     price: 0.99
   }
 }

 module.exports = fruits;