const dirFinder = (lastDir, turn) => {
  let newDir = '';
  switch (lastDir) {
    case 'N': if (turn === 'right') {
      newDir = 'E';
    }
    else {
      newDir = 'W';
    }
      break;
    case 'E': if (turn === 'right') {
      newDir = 'S';
    }
    else {
      newDir = 'N';
    }
      break;
    case 'S': if (turn === 'right') {
      newDir = 'W';
    }
    else {
      newDir = 'E';
    }
      break;
    case 'W': if (turn === 'right') {
      newDir = 'N';
    }
    else {
      newDir = 'S';
    }
      break;
  }
  return newDir;
}

const blocksAway = directions => {
  let origin = [0, 0];
  let orientation = '';
  let output = {};
  if (directions[0] === 'right') {
    orientation = 'N';
  }
  else if (directions[0] === 'left') {
    orientation = 'E';
  }
  for (let i = 0; i < directions.length; i += 2) {
    orientation = dirFinder(orientation, directions[i])
    if (orientation === 'N') {
      origin[1] += directions[i + 1];
    }
    else if (orientation === 'S') {
      origin[1] -= directions[i + 1];
    }
    else if (orientation === 'E') {
      origin[0] += directions[i + 1];
    }
    else if (orientation === 'W') {
      origin[0] -= directions[i + 1];
    }
  }
  output.east = origin[0];
  output.north = origin[1];
  return output;
}


console.log(blocksAway(["right", 2, "left", 3, "left", 8]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));