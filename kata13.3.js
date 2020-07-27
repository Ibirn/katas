const toCamel = input => {
  let output = [];
  input = input.split(' ');
  for (let j = 0; j < input.length; j++) {
    output.push(input[j][0].toUpperCase());
    for (let k = 1; k < input[j].length; k++) {
      output.push(input[j][k]);
    }
  }
  let camFirst = output[0][0].toLowerCase();
  output.shift();
  output.unshift(camFirst);
  output = output.join('');
  return output;
}

const toPascal = input => {
  let output = [];
  input = input.split(' ');
  for (let j = 0; j < input.length; j++) {
    output.push(input[j][0].toUpperCase());
    for (let k = 1; k < input[j].length; k++) {
      output.push(input[j][k]);
    }
  }
  output = output.join('');
  return output;
}

const toSnake = input => {
  let output = [];
  input = input.split(' ');
  output = input.join('_');
  return output;
}

const toKebab = input => {
  let output = [];
  input = input.split(' ');
  output = input.join('-');
  return output;
}

const toTitle = input => {
  let output = [];
  for (let j = 0; j < input.length; j++) {
    if (j === 0) {
      output += input[j].toUpperCase();
    }
    else if (input[j] === ' ') {
      j++;
      output += ' ' + input[j].toUpperCase();
    }
    else {
      output += input[j];
    }
  }
  return output;
}

const toVowel = input => {
  let output = [];
  for (let k = 0; k < input.length; k++) {
    if (input[k] === 'a' || input[k] === 'e' || input[k] === 'i' || input[k] === 'o' || input[k] === 'u') {
      output += input[k].toUpperCase();
    }
    else {
      output += input[k].toLowerCase();
    }
  }
  return output;
}

const toConsonant = input => {
  let output = [];
  for (let k = 0; k < input.length; k++) {
    if (input[k] === 'a' || input[k] === 'e' || input[k] === 'i' || input[k] === 'o' || input[k] === 'u') {
      output += input[k].toLowerCase();
    }
    else {
      output += input[k].toUpperCase();
    }
  }
  return output;
}

const toUpper = input => {
  let output = [];
  output = input.toUpperCase();
  return output;
}

const toLower = input => {
  let output = [];
  output = input.toLowerCase();
  return output;
}

const makeCase = (input, casing) => {
  let output;
  if (typeof casing === 'string') {
    casing = [casing];
    //turns single casing requests into array elements to be pulled
  }
  for (let i = 0; i < casing.length; i++) {
    //goes through cases for priority one.
    switch (casing[i]) {
      case 'camel':
        output = toCamel(input);
        break;
      case 'pascal':
        output = toPascal(input);
        break;
      case 'snake':
        output = toSnake(input);
        break;
      case 'kebab':
        output = toKebab(input);
        break;
      case 'title':
        output = toTitle(input);
        break;
      default:
        output = input; //necessary to keep string alive for second priority;
        break;
    }
  }
  input = output; //keeps one workable string
  for (let j = 0; j < casing.length; j++) {
    switch (casing[j]) {
      case 'vowel':
        output = toVowel(input);
        break;
      case 'consonant':
        output = toConsonant(input);
        break;
      default:
        output = input;
    }
  }
  input = output; //same again ^
  for (let k = 0; k < casing.length; k++) {
    switch (casing[k]) {
      case 'upper':
        output = toUpper(input);
        break;
      case 'lower':
        output = toLower(input);
        break;
    }
  }
  return output;
}


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));