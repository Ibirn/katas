/*
making secret codes!

take a string
count characters
root and ceiling the number of characters
make line length the above number
code by going down the left most side
*/

const squareCode = message => {
  message = message.split(' ').join('')
  let longth = Math.ceil(Math.sqrt(message.length))
  let coded = [];
  let squareArr = []
  //console.log(longth)

  let row_i = 0;

  for(let i = 0; i < message.length; i++){
    if(i % longth === 0){
      coded = [message[i]]
      squareArr.push(coded);
      //console.log(coded + ' ' + squareArr)
      //if(i !== 0){
        //row_i += 1;
      //}
    }else{
      squareArr[row_i].push(message[i]); 
    }
  }
  //return squareArr
};

console.log(squareCode("have a nice day"));

//console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));