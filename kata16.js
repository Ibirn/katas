const generateBoard = (whiteQueen, blackQueen) => {
  let board = [];
  for (let i = 0; i < 8; i++) {
    board[i] = [];
    for (let j = 0; j < 8; j++) {
      if (i === whiteQueen[0]) {
        if (j === whiteQueen[1]) {
          board[i].push(1);
        }
        else if (i === blackQueen[0]) {
          if (j === blackQueen[1]) {
            board[i].push(1);
          }
          else {
            board[i].push(0);
          }
        }
        else {
          board[i].push(0);
        }
      }
      else if (i === blackQueen[0]) {
        if (j === blackQueen[1]) {
          board[i].push(1);
        }
        else {
          board[i].push(0);
        }
      }
      else {
        board[i].push(0);
      }
    }
  }
  return board;
}

const queenThreat = board => {
  let queenLoc = [];
  for(let i = 0; i < board.length; i++){
    for (let j = 0; j < board[i].length; j++){
      if(board[i][j] !== 0){
        queenLoc.push([i, j]);
      }
    }
  }
  if(queenLoc[0][1] === queenLoc[1][1]){
    return true;
  }
  else if(queenLoc[0][0] === queenLoc[1][0]){
    return true;
  }
  else if(Math.abs(queenLoc[0][0] - queenLoc[1][0]) === Math.abs(queenLoc[0][1] - queenLoc[1][1])){
    return true;
  }
  else{
    return false;
  }
}


let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
