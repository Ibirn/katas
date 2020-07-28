/*
guess who's back
back again
case maker's back
he brought friends - /camel /pascal snake kebab title vowel consonant

take an input and a casing style OR STYLES, convert string to styles, output.

title scudwork
        input = input.split(' ')
        for(let j = 0; j < input.length; j++){
          let temp ='';
          temp = input[j][0].toUpperCase();
          input[j][0] = input[j][0].toUpperCase();
          console.log(input)
          
        }


*/

const makeCase = (input, casing) => {
  let output = [];
  if(typeof casing === 'string'){
    casing = [casing];
    //turns single casing requests into array elements to be pulled
  }

  for(let i = 0; i < casing.length; i++){
    console.log(casing[i]);
    //cycles through casing requests
    switch (casing[i]){
      case 'camel':
        input = input.split(' ');
        
        for(let j = 0; j < input.length; j++){
          output.push(input[j][0].toUpperCase());
          for(let k = 1; k < input[j].length; k++){
            output.push(input[j][k]);
          }
        }
        let camFirst = output[0][0].toLowerCase();
        output.shift();
        output.unshift(camFirst);
        output = output.join('');
        break;

      case 'pascal':
        input = input.split(' ')
        
        for(let j = 0; j < input.length; j++){
          output.push(input[j][0].toUpperCase());
          for(let k = 1; k < input[j].length; k++){
            output.push(input[j][k]);
          }
        }
        output = output.join('')
        break;
      
      case 'snake':
        input = input.split(' ');
        output = input.join('_');
        break;

      case 'kebab':
        input = input.split(' ');
        output = input.join('-');
        break;

      case 'title':
        for(let j = 0; j < input.length; j++){
          if(j === 0){
            output += input[j].toUpperCase()
          }
          else if(input[j] === ' '){
            j++
            output += ' ' + input[j].toUpperCase();
          }
          else{
            output += input[j]
          }
        }
        break;

      case 'vowel':
        for(let j = 0; j < input.length; j++){
          if(input[j] === 'a' || input[j] === 'e' || input[j] === 'i' || input[j] === 'o' || input[j] === 'u'){
            output += input[j].toUpperCase()
          }
          else{
            output += input[j].toLowerCase();
          }
        }
        break;


      case 'consonant':
        for(let j = 0; j < input.length; j++){
          if(input[j] === 'a' || input[j] === 'e' || input[j] === 'i' || input[j] === 'o' || input[j] === 'u'){
            output += input[j].toLowerCase();
          }
          else{
            output += input[j].toUpperCase();
          }
        }
        break;
      
      case 'upper':
        output = input.toUpperCase();
        //console.log(typeof input)
        break;

    }
    console.log(output)
    if (i === (casing.length - 1)){
      //return output
    }

  }

}

//console.log(makeCase("this is a string", "upper"));

console.log(makeCase("this is a string", ["upper", "snake"]));