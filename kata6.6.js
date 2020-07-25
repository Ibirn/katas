/*
take an array of arrays.
take index 0 of big array
take index 0 of small array and return it a number of times equal to index 1 of small array.
repeat until big array is empty.

const repeatNumbers = data => {
  let newArr = '';
  for(let i = 0; i < data.length; i++){
    newArr = data[i][0] 
    console.log(newArr)
  }
  return newArr + "!"
}
console.log(repeatNumbers([[10,3]]))

NOOOOOPE

x += 'ha'
*/

const repeatNumbers = data => {
  let numberLine = '';

  for(let r = 0; r < data.length; r++){
    for(let c = 1; c <= data[r][1]; c++){
      numberLine += data[r][0]
    }
    if(r !== data.length - 1){
      numberLine += ", "
    }
  }
  return numberLine;
}


console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));