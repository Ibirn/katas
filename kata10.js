/*
 two arrays of stuff
compare with a list to see if it has an element from both lists.
*/

const chooseRecipe = (bakeryA, bakeryB, recipes) => {
  ingredientOne = '';
  ingredientTwo = '';


  for(let i = 0; i < recipes.length; i++){
    ingOne = recipes[i].ingredients[0]
    ingTwo = recipes[i].ingredients[1]
    for(let j = 0; j < bakeryA.length; j++){
      if (bakeryA[j] === ingOne || bakeryA[j] === ingTwo){
        console.log(recipes[i].name)
        for(let k = 0; k < bakeryB; k++){
          if (bakeryB[k])
          console.log('this one:' + recipes[i].name)
        }
    }
  }
}
}

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

chooseRecipe(bakeryA, bakeryB, recipes)
/*
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

*/