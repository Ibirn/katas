/*
city=Vancouver&weather=lots%20of%20rain needs to be decoded into an object like
{
  city: "Vancouver",
  weather: "lots of rain"
}

      if (!urlObject.hasOwnProperty(newData[0])) {
        urlObject[newData[0]] = newData[1]
      }

*/

const urlDecode = text => {
  let urlObject = {}
  text = text.split('&');
  for (let i = 0; i < text.length; i++) {
    let newData = text[i].split('=')
    text[i]
    for (let j = 0; j < newData.length; j++) {
      newData[j] = newData[j].split('%20').join(' ')
    }
    if (!urlObject.hasOwnProperty(newData[0])) {
      urlObject[newData[0]] = newData[1]
    }
  }
  return urlObject
}

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);