const stringSplit = (input, cut) => {
  let output = [];
  for (let i = 0; i < input.length; i += cut) {
    output.push(input.substr(i, cut));
  }
  return output;
}

const squareCode = (message) => {
  message = message.split(' ').join('')
  let segLength = Math.ceil(Math.sqrt(message.length))
  let codeSeg = stringSplit(message, segLength);
  let output = [];
  for (let k = 0; k <= codeSeg.length; k++){
    output[k] = '';
  }
  for (let i = 0; i < codeSeg.length; i++) {
    for (let j = 0; j < codeSeg[i].length; j++) {
      output[j] += codeSeg[i][j];
    }
  }
  output = output.join(' ');
  return output;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("with great power comes great responsibility"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));