// Get an array of objects, find the thing with the longest name property, return that object.

const instructorWithLongestName = instructors => {
  let nameOf = 0;
  let size = 0;
  for (let i = 0; i < instructors.length; i++){
    if (instructors[i].name.length > size){
      size = instructors[i].name.length
      nameOf = instructors[i]
    }
  }
  return nameOf;
}



console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));