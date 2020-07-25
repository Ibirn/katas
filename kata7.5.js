/*
const camelCase = input => {
  let output = '';

  for(let i = 0; i < input.length; i++){
    if (input[i] === ' '){
      i++
      output += input[i].toUpperCase()
      i++
      if (input[i] === ' '){
        i++
        output += input[i].toUpperCase()
        i++
      }
    }
    output += input[i]
  }
  return output;
}
*/
/*
const camelCase = input => {
  let output = [];
  let firstLetter = '';
  input = input.split(' ');

  for(let i = 0; i < input.length; i++){
    output.push(input[i][0].toUpperCase())
    for(let j = 1; j < input[i].length; j++){
      output.push(input[i][j])
    }
  }
  firstLetter = output[0][0]
  firstLetter = firstLetter.toLowerCase()
  output.shift();
  output.unshift(firstLetter);
  return output.join('');
};
*/

const camelCase = input => {
  let output =[];
  let firstLetter = '';
  input = input.split(' ');

  for(let i = 0; i < input.length; i++){
    output.push(input[i][0].toUpperCase())
    for(let j = 1; j < input[i].length; j++){
      output.push(input[i][j]);
    }
  }
  firstLetter = output[0][0].toLowerCase()
  output.shift();
  output.unshift(firstLetter);
  return output.join('');
}



console.log(camelCase("This is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));