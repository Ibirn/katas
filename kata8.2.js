/*

const multiplicationTables = maxValue => {
  let table = [];
  table.push('')
  for(let i = 1; i <= maxValue; i++){
    for(let j = 1; j <= maxValue; j++){
      table.push([i * j]);
      if(j === maxValue){
        table.push('\n')
        

      }
    }

  }
  table = table.join(' ')
  return(table);
}
 this works roughly and was first attempt. much easier as string.
*/

const multiplicationTables = maxValue => {
  let table = '';
  for(let i = 1; i <= maxValue; i++){
    for(let j = 1; j <= maxValue; j++){
      table += (i * j)
      if(j === maxValue){
        table += '\n'
      }
      else{
        table += ' '
      }
    }
  }
  return table
}
console.log(multiplicationTables(7))


 //for(let i = 0; i < ____; i++){}