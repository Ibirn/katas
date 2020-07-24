let arrayOne = [3, 5, 4, 7, 8, 3]

sortAndSum = (newArr) => {
  let tempOne = newArr[0];
  let tempTwo = newArr[1];
  
  //if longer?
  for(let i = 2; i < newArr.length; i++){
    if (newArr[i] > tempOne){
      tempOne = newArr[i];
      console.log('tempone:' + tempOne)
    }
    else if (newArr[i] > tempTwo){
      tempTwo = newArr[i];
      console.log('temptwo:' + tempTwo)
    }
    

  }
  return tempOne + tempTwo;
}
console.log(sortAndSum(arrayOne))