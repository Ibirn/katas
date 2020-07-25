/*
BACK TO CODEVILLE 2: ELECTRIC BOOGALOO
track which spaces in a parking garage are available based on vehicle type or tells them it's full.

wherecanIpark() that returns xy coordinates for the vehicle

receives array of parking spots and type of vehicle TRYING to park.

can be Regular car R (only in R spot)
can be Smol car S (in R or S spot)
can be Bike car M ( in any spot )
ugh the array uses caps to tell if a spot is available. Caps = available, no caps = unvailable
*/

whereCanIPark = (spots, vehicle) => {
  let spotIndex = [];
  for (let r = 0; r < spots.length; r++){
    for (let c = 0; c < spots[r].length; c++){
      if(vehicle === 'motorcycle' && spots[r][c].charCodeAt(spots[r][c]) <= 90){
        spotIndex.push(c)
        spotIndex.push(r)
        return spotIndex;
      }
      else if(vehicle === 'small' && spots[r][c].charCodeAt(spots[r][c]) === 83 || spots[r][c].charCodeAt(spots[r][c]) === 82){
        spotIndex.push(c)
        spotIndex.push(r)
        return spotIndex;
      }
      else if(vehicle === 'regular' && spots[r][c].charCodeAt(spots[r][c]) === 82){
        spotIndex.push(c)
        spotIndex.push(r)
        return spotIndex;
      }
      }
    }
    return false;
}

