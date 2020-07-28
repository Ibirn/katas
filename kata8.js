const multiplacationTables = maxValue => {
  let table = [];
  for(let i = 1; i <= maxValue; i++){
    for(let j = 1; j <= maxValue; j++){
      table.push([i * j]);
      if(j === maxValue){
        table.push('\n')
        

      }
    }

  }
  
  table.toString();
  return(table.join(''));
}


console.log(multiplacationTables(7))



/*for(row = 0; row < maxValue; row++){
  for(column = 0; column < maxValue[row].length; column++){
    table.push([1 * i])
    table.push([2 * i])
  }
  */
 //for(let i = 0; i < ____; i++){}