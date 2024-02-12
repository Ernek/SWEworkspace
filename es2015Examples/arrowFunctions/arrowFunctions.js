/*  
function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }
*/

// Arrow function

let doubleFunction = (arr) => arr.map((val) => val * 2)

// Usage 
// doubleFunction([2,3,6,9])

console.log(doubleFunction([3,4]))




/*
function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}

*/

let squareAndFindEvens = (n) => n.map((num) => num**2).filter((square) => square % 2 == 0)

console.log(squareAndFindEvens([2,3,4,5,1,10]))