//replacing whitespace with %20 for url purposes.

const urlEncode = (text) => {
  text = text.trim();
  return text.split(' ').join('%20') 
  
}
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("  a  wednesday  apart"));
/*


const urlEncode = (text) => {
  text =text.trim();
  let newString = [];
  for (let i = 0; i < text.length; i++){
    if (text[i] === ' ') {
      newString.push('%20')
    }
    else {
      newString.push(text[i])
    }
  }
  return newString.join('');
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("  a  wednesday  apart"));

*/