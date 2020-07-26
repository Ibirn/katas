const chooseRecipe = (bakeryA, bakeryB, recipes) => {

  for(let i = 0; i < recipes.length; i++){
    //console.log(recipes[i].ingredients)
    //gets ingredient section
    for(let j = 0; j < recipes[i].ingredients.length; j++){
      //console.log(recipes[i].ingredients[j] + ' ' + i)
      //gets individual ingredients
      //console.log('position ' + i +' '+ j)
      for(let k = 0; k < bakeryA.length; k++){
        //console.log(bakeryA[k])
        //checks bakeryA
        if(recipes[i].ingredients[j] === bakeryA[k]){
         // console.log(recipeCheck)
          //compares bakeryA's ingredients to all ingredients.
          for(let l = 0; l < recipes[i].ingredients.length; l++){
            //checks ingredients in recipes that have something from bakeryA
            for(let m = 0; m < bakeryB.length; m++){
              //checks bakeryB for ingredients
              if(bakeryB[m] === recipes[i].ingredients[l]){
                return recipes[i].name
              }
            }
          }
        }
      }
    }
  }
  return 'No available recipes!'
}


let bakeryA = ['safon', 'cake base', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese', 'ground beef'];
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
