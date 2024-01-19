const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}
let colorsClicked = 0;
let colorDuo = [];
let colorIndexes = [];
let matchedIndexes = [];
let pauseCode = true
// let firstColor = ''

function handleCardClick(event) {
  colorsClicked += 1;
  if (pauseCode === false){
    console.log('Code is paused')
    return
  }
  // else{
    // console.log('Clicking works')
  // }
  if (colorsClicked >= 2) {
    // Index of card
    let indexOfDiv2 = Array.from(event.target.parentNode.children).indexOf(event.target)
    if ((matchedIndexes.includes(indexOfDiv2)) || (matchedIndexes.includes(colorIndexes[0]))){
      console.log(` Indexes are ${matchedIndexes}`)
      return;
    }
    // If clicking on the same card on the second click exit function 
    // to wait for a second or whatevern numbered click (>= 2 logic) 
    // on a different card  
    if (colorIndexes[0] == indexOfDiv2){
      return;
    }
    // save color of second card clicked
    let secondColor = event.target.className
    // change card (element) background color  
    event.target.style.backgroundColor = event.target.className
    // restart colorsClicked 
    colorsClicked = 0;


    // Populate arrays to compare colors and indexes 
    colorDuo.push(secondColor)
    colorIndexes.push(indexOfDiv2)
    // Check elements     
    console.log(`Index of div with color ${colorDuo[1]} is ${indexOfDiv2}`)
    // Check arrays
    console.log('Arrays:') 
    console.log(colorDuo, colorIndexes);

    // checkMatch(colorDuo, seccondColor)
    if ((colorDuo[0] == colorDuo[1]) && (colorIndexes[0] != colorIndexes[2]) ){
      console.log(`Matched colors ${colorDuo[0]} = ${colorDuo[1]}`)
      matchedIndexes.push(colorIndexes[0]);
      matchedIndexes.push(colorIndexes[1]);
      console.log(`Matched indexes ${matchedIndexes}`)
    }
    else {
      console.log(`Colors don't match ${colorDuo[0]} = ${colorDuo[1]}`)
      let cardElement0 = Array.from(event.target.parentNode.children)[colorIndexes[0]]
      let cardElement1 = Array.from(event.target.parentNode.children)[colorIndexes[1]]
      setTimeout(changeColorBack, 1000, cardElement0);
      setTimeout(changeColorBack, 1000, cardElement1);
      pauseCode = false
      setTimeout(() => {
        colorsClicked = 0
        pauseCode = true
      }, 1000);
      // setTimeout(changeColorBack1, 2000);
    }
    // emptying colorDuo and colorIndexes 
    colorDuo.pop();
    colorDuo.pop();
    colorIndexes.pop();
    colorIndexes.pop();
  }
  else { 
    // You can use event.target to see which element was clicked
    // Save index of div element 
    let indexOfDiv1 = Array.from(event.target.parentNode.children).indexOf(event.target)
    // Save color of div element as firstColor
    if (matchedIndexes.includes(indexOfDiv1)){
      colorsClicked = 0
      return;
    }
    let firstColor = event.target.className
    // Change background of card (element)
    event.target.style.backgroundColor = event.target.className
    // Populate arrays for comparison of color and index
    colorDuo.push(firstColor)
    colorIndexes.push(indexOfDiv1);
    
    // Check elements of arrays
    console.log(`Index of div with color ${colorDuo[0]} is ${indexOfDiv1}`)
  }

  function changeColorBack(element){
    element.style.backgroundColor = 'white'
  }

}

// when the DOM loads
createDivsForColors(shuffledColors);
