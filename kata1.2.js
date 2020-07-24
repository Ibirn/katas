let arrayOne = [3, 5, 4, 7, 8, 3]
let arrayTwo = [-1, -4, 102, 0]



const sumLargestNumbers = data =>{
  let tempOne = data[0];
  let tempTwo = data[1];

  for(let i = 2; i < data.length; i++){
    if(data[i] > tempOne){
      tempOne = data[i];
      console.log('temp1'+ tempOne)

    }
  }

  for(let i = 0; i < data.length; i++){
    if(data[i] > tempTwo && data[i] !== tempOne){
      tempTwo = data[i]
      console.log('temp2'+ tempTwo)
    }
  }
  return tempOne + tempTwo;
}

//just so you know what happens here with the disordered position one and two giving the right answer: since the temps are set to the highest values, the first for loop check and says 'nope, nothing's bigger.' then the second loop looks for a bigger number that isn't tempOne, which there isn't.
console.log(sumLargestNumbers([100, 700, 37,50]));