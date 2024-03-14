let element = new Set([1,1,2,2,3,4])
console.log(element)


console.log([...new Set("referee")].join(""))

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

console.log(m)



function hasDuplicate(array){
    dictionary = new Map()
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (dictionary.has(element)) {
        return true
      } 
      else {
        dictionary.set(element)
        continue
      }
    }
    return false
}
console.log(hasDuplicate([1,3,2,1])) // true
console.log(hasDuplicate([1,5,-1,4])) // false

function vowelCount(text) {
  voweldic = new Map()
  vowels = ['a','e','i','o','u']
  for (let index = 0; index < text.length; index++) {
    const element = text[index];
    if (vowels.includes(element)) {
      if (voweldic.has(element)){
        voweldic.set(element, voweldic.get(element)+1)
      }
      else{
        voweldic.set(element, 1)
      }
      
    }
    else{
      continue
    }
  }
  return voweldic
}

console.log(vowelCount('hello'))
console.log(vowelCount('awesome'))
console.log(vowelCount('Colt'))