/*
Best change calculator. Represent in cents. so 1 buckazoid == 100
Valid returns: twenty buckazoids (2000) ten (1000) five (500) twonies (200) loonies (100)
quarters (25) dime(10) nickel(5) penny(1)
return an object that lists the returns as values of properties.
*/

const calculateChange = (total, cash) => {
  let change = {};
  let temp;
  //change.twoDollars = 1;
  //change.oneDollars = 3;
  temp = cash - total;
  //console.log(cash)
  if(temp % 2000 !== 0){
    change.twenties = Math.floor(temp/2000);
    temp %= 2000;
    if (temp % 1000 !== 0){
      change.tenners = Math.floor(temp/1000);
      temp %= 1000;
      if (temp % 500 !== 0){
        change.fivers = Math.floor(temp/500);
        temp %= 500;
        if(temp % 200 !== 0){
          change.toonies = Math.floor(temp/200);
          temp %= 200;
          if(temp % 100 !== 0){
            change.loonies = Math.floor(temp/100);
            temp %= 100;
          }
          else{
            change.loonies = temp / 100;
          }
        }
        else{
          change.toonies = temp / 200;
        }
      }
      else{
        change.fivers = temp / 500;
      }
    }
    else {
    change.tenners = temp/1000;
    }
  }
  else{
    change.twenties = temp/2000;
  }
  return change
}

console.log(calculateChange(1900, 6000));