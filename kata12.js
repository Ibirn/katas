const organizeInstructors = instructors => {
  let organized = {};
  for(let i = 0; i < instructors.length; i++){
    if(!organized.hasOwnProperty(instructors[i].course)){
      organized[instructors[i].course] = [instructors[i].name];
    }
    else if(organized.hasOwnProperty(instructors[i].course)){
      organized[instructors[i].course].push(instructors[i].name);
    }
  }
  return organized;
}

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));