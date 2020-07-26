/*
fill bouncy castles to the right amount!
the amounts depend on the volumes of shapes in the castle!
so we need four functions: sphereVolume, coneVolumen and prosmVolume
then the fourth takes and array containing the different shapes that uses the other three funciotns to determine volume
*/
const PI = 3.14159;

const sphereVolume = sRadius => {
  let sVolume = (4 / 3) * Math.PI * (sRadius * sRadius * sRadius);
  return sVolume;
}

const coneVolume = (cRadius, cHeight) => {
  let cVolume = (1 / 3) * Math.PI * (cRadius * cRadius) * cHeight;
  return cVolume;
}

const prismVolume = (pHeight, pWidth, pDepth) => {
  let pVolume = (pHeight * pWidth) * pDepth;
  return pVolume;
}


const totalVolume = (solids) => {
  outputVolume = 0;
  for(let i = 0; i < solids.length; i++){
    if (solids[i].type === 'sphere'){
      outputVolume += sphereVolume(solids[i].radius);
    }
    else if(solids[i].type === 'cone'){
      outputVolume += coneVolume((solids[i].radius),(solids[i].height));
    }
    else if(solids[i].type === 'prism'){
      outputVolume += prismVolume((solids[i].height),(solids[i].width),(solids[i].depth));
    }
  }
  return outputVolume;
}

//console.log(sphereVolume(40));
//console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);
//console.log(prismVolume(3, 4, 5) === 60);

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]




console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);
console.log(prismVolume(3, 4, 5) === 60);
console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
console.log(totalVolume(duck));