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



x += 'ha'
*/

const repeatNumbers = data => {
  let newArr = []
  let temp = '';
  holdIndex = 0;
  for(let r = 0; r < data.length; r++){
    for(let c = 1; c <= data[r][1]; c++){
      newArr.push(data[r][0])
    }
    
  }
  for(let i = 0; i < newArr.length; i++){
    if(newArr[i] !== newArr[i + 1]){
      

    }

  }
  console.log(newArr.toString())
  console.log(newArr.join(''))
}


console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));