/*
 two arrays of stuff
compare with a list to see if it has an element from both lists.
*/

const chooseRecipe = (bakeryA, bakeryB, recipes) => {
  ingOne = '';
  ingTwo = '';
  recName = '';

  for(let i = 0; i < recipes.length; i++){
    ingOne = recipes[i].ingredients[0]
    ingTwo = recipes[i].ingredients[1]
    recName = recipes[i].name
    

    for(let j = 0; j < bakeryA.length; j++){
      if(bakeryA[j] === ingOne){
        //console.log(ingOne)
        for(let k = 0; k < bakeryB.length; k++){
          if(bakeryB[k] === ingTwo){
            //console.log(ingTwo)
          }
          else{
            //console.log('nope')
          }
        }
      }
      else if(bakeryA[j] === ingTwo){
        //console.log('ingtwo:' + ingTwo)
        for(let l = 0; l < bakeryB.length; l++){
          if(bakeryB[l] === ingOne){
          }
        }
      }
    }
  }
  return recName
}



let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));