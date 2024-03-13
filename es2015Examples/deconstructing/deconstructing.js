// Objec destructuring 

let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); 
console.log(yearNeptuneDiscovered); 


function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

console.log(getUserData({firstName: "Alejandro", favoriteColor: "purple"})) // ?
console.log(getUserData({firstName: "Melissa"})) 
console.log(getUserData({}))
 
// Array destructuring 
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // ?
console.log(second); // ?
console.log(third); // ?

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

console.log(raindrops); // ?
console.log(whiskers); // ?
console.log(aFewOfMyFavoriteThings); // ?

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // ?

// Exercise 1 
var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

// Destructuring
let {numbers: {a, b}} = obj;

console.log(a, b)

// Exercise 2
var arr = [1, 2];
//var temp = arr[0];
//arr[0] = arr[1];
//arr[1] = temp;

arr = [arr[1],arr[0]]
console.log(arr)


// RaceResults

// Destructuring
function raceResults([first, second, third, ...rest]) {
  return {first, second, third, rest}
}
console.log(raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']))


// With arrow function
raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

// {first: "Tom", second: "Margaret", third: "Allison", rest: ["David", "Pierre"]}

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})
