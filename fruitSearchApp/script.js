const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const listedSuggestions = document.querySelector('#fruitlist');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let inputVal = str.toLowerCase()
	let results = [];
	for (let i = 0; i < fruit.length; i++) {
		if (fruit[i].toLowerCase().includes(inputVal)) {
		  results.push(fruit[i])
		}
	}
	showSuggestions(results,inputVal)

	return results;
}


function searchHandler(e) {
	suggestions.innerHTML = "";
	if (input.value != ""){
		search(input.value)
	}
	else {
		suggestions.innerHTML = "";
	}
	
}

function showSuggestions(results, inputVal) {
	for (let i = 0; i < results.length ; i++) {
		let newli = document.createElement("li")
		newli.textContent = results[i]
		suggestions.appendChild(newli)
	}
	
}

function useSuggestion(e) {
	input.value = e.target.textContent
	suggestions.innerHTML = ""
	search(input.value)
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
listedSuggestions.addEventListener('mouseover',function(e){
		// console.log(e.target);
		e.target.style.fontWeight = 'bold'
	},
	)
listedSuggestions.addEventListener('mouseout', function(e){
		e.target.style.fontWeight = 'normal';
	});

listedSuggestions.addEventListener('click', useSuggestion)