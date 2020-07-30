let sameCheck = (newArr, check) => {
  let count = 0;
  for (let j = 0; j < newArr.length; j++) {
    if (newArr[j] === check) {
      count++;
    }
  }
  return count;
}
let prompt = require("prompt-sync")();
console.log("Welcome to the Guessing Game! What's the highest number we can pick?");
let size = prompt("Pick the upper limit: ");
if (isNaN(size)) {
  console.log("That wasn't a number, so we're setting it to 10!")
  size = 10;
}
console.log("Let the game begin!")
let theNumber = Math.floor(Math.random() * size) + 1;
// code below (replace this example)
let attempts = [];
let answer = prompt("Guess a number: ");
//console.log("You answered: " + answer);
attempts.push(Number(answer));

for (let i = 0; i < attempts.length; i++) {
  if (isNaN(attempts[i])) {
    console.log("That wasn't a number!");
    answer = prompt("Guess a number: ");
    attempts.shift();
    attempts.push(Number(answer));
    i--;
  }
  else if (sameCheck(attempts, attempts[i]) > 1) {
    console.log("You guesed that already!");
    answer = prompt("Guess a number: ");
    attempts.shift();
    attempts.push(Number(answer));
    i--;
  }
  else if (attempts.length === 10) {
    console.log("Would you like a hint? Type 'y' for Yes and 'n' for No!");
    let hint = prompt("Want a hint? ");
    if (hint === 'y' || hint === 'Y' || hint === 'yes' || hint === 'Yes' || hint === "YES") {
      if (theNumber % 2 === 0) {
        console.log('The number is an EVEN number.');
        answer = prompt("Guess a number: ");
        attempts.push(Number(answer));
      }
      else {
        console.log('The number is an ODD number.');
        answer = prompt("Guess a number: ");
        attempts.push(Number(answer));
      }
    }
    else if (hint === 'n' || hint === 'N' || hint === 'no' || hint === 'No' || hint === "NO") {
      console.log("Alright! Good luck!");
      answer = prompt("Guess a number: ");
      attempts.push(Number(answer));
    }
    else {
      console.log("We'll take that as a 'no.'")
      answer = prompt("Guess a number: ");
      attempts.push(Number(answer));
    }
  }

  else if (attempts[i] === theNumber) {
    console.log('You got it! It took you ' + attempts.length + ' tries!');
  }
  else if (attempts[i] > theNumber) {
    console.log('Too high!');
    answer = prompt("Guess a number: ");
    attempts.push(Number(answer));
  }
  else if (attempts[i] < theNumber) {
    console.log('Too low!');
    answer = prompt("Guess a number: ");
    attempts.push(Number(answer));
  }
}
//console.log(attempts)

//console.log(sameCheck(attempts, answer))