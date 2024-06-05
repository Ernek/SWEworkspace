// Getting back what we request. Part 1 

// async function getGyph(word) {
//     var wordArray = word.trim().split(/\s+/);
//     var wordSearch = wordArray.join("+")
//     var key = "put_key"
//     const apiTerm = `https://api.giphy.com/v1/gifs/search?q=${wordSearch}&api_key=${key}V&limit=1`
//     // console.log(apiTerm)
//     const res = await axios.get(apiTerm)
    // for (let giph of res.data.data){
    //     console.log(giph)
    // }
// }
const $gifArea = $("#gif-space");
const $searchInput = $("#search");

/* use ajax result to add a gif */

function addGif(res) {
  let numResults = res.data.length;
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
    let $newGif = $("<img>", {
      src: res.data[randomIdx].images.original.url,
      class: "w-100"
    });
    $newCol.append($newGif);
    $gifArea.append($newCol);
  }
}

/* handle form submission: clear search box & make ajax call */

$("form").on("submit", async function(evt) {
  evt.preventDefault();

  let searchTerm = $searchInput.val();
  let wordArray = searchTerm.trim().split(/\s+/);
  let wordSearch = wordArray.join("+")
  // limit 5, api key 
  const apiTerm = `https://api.giphy.com/v1/gifs/search?q=${wordSearch}&api_key=${key}&limit=5`

  $searchInput.val("");

  const response = await axios.get(apiTerm);
  addGif(response.data);
});

/* remove gif */

$("#remove").on("click", function() {
  $gifArea.empty();
});


// getGyph('dog')
// console.log("Let's get this party started!");
