/*
Best change calculator. Represent in cents. so 1 buckazoid == 100
Valid returns: twenty buckazoids (2000) ten (1000) five (500) twonies (200) loonies (100)
quarters (25) dime(10) nickel(5) penny(1)
return an object that lists the returns as values of properties.
divide to whole numbers?

*/


const calculateChange = (total, cash) => {
  change = {
    twenties: 0,
    tenners: 1
  }
  cash -= total;
  //for(let i = 0; i < change.length; i++){
    return change
  //}
}

console.log(calculateChange(1787, 2000));