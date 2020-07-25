/*
CODEVILLE 3: REVENGE OF THE SON OF CODEVILLE

check values, average them, and if it's over an intake value, print message


*/

const checkAir = (samples, threshold) => {
  let tolerance = 0;
  for(let i = 0; i < samples.length; i++){
    if(samples[i] === 'dirty'){
      tolerance += 1;
    }
  }
  if((tolerance / samples.length) > threshold){
    return 'Polluted'
  }
  else {
    return 'Clean'
  }
}


console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'clean', 'clean', 'clean', 'clean','dirty', 'clean', 'clean', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))