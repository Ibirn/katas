let prompt = require("prompt-sync")();

// code below (replace this example)
let attempts = [];
let theNumber = Math.floor(Math.random() * 10) + 1;
console.log('the Number: ' + theNumber)
let answer = prompt("Guess a number: ");
//console.log("You answered: " + Number(answer));
attempts.push(Number(answer))

//console.log(attempts)

for (let i = 0; i < attempts.length; i++) {
  //console.log(attempts)
  if (attempts[i] === theNumber) {
    console.log('You got it! It took you ' + attempts.length + ' tries!')
  }
  else if (attempts[i] > theNumber) {
    console.log('Too high!')
    answer = prompt("Guess a number: ")
    attempts.push(Number(answer))
  }
  else if (attempts[i] < theNumber) {
    console.log('Too low!')
    answer = prompt("Guess a number: ")
    attempts.push(Number(answer))
  }
  else if (isNaN(attempts[i])) {
    console.log("Try again. That's not a number :/")
    attempts.push(-1)
    answer = prompt("Guess a number: ")
  }
  
}

//console.log("You answered: " + intro);
//console.log(guessNumber)

/**
 * if (answer !== guessNumber){
  if(answer > guessNumber){
    prompt("Too high!")
    attempts.push(answer)
    answer = prompt("Guess again: ")
    console.log('too high' + attempts)
  }
  else if (answer < guessNumber){
    prompt("Too low!")
    attempts.push(answer)
    answer = prompt("Guess again: ")
    console.log('too low' + attempts)
  }
  else{
    for(let i = 0; i < attempts.length; i++){
      if (answer === attempts[i]){
        prompt("Already guessed!")
        answer = prompt("Guess again: ")
      }
    }
  }
}
else if (answer === guessNumber){
  prompt("You did it! You took " + attempts.length + "tries!")
}
 */