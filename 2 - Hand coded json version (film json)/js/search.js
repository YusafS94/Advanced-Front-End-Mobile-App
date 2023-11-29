const films = [
    { title: "Jaws", year: 1975, duration: 124, certificate: "15" },
    { title: "Get Out", year: 2017, duration: 117, certificate: "15" },
    { title: "Winter's Bone", year: 2010, duration: 100, certificate: "15" },
    { title: "The Incredibles", year: 2004, duration: 115, certificate: "U" },
    { title: "The Grinch", year: 2004, duration: 115, certificate: "U" },
]
const fightersList2 = document.querySelector("#fighters-list2");

function doSearch() {
    // Defining function to clear previous search results from the DOM
    function clearResults(resultsList) {
        while (resultsList.firstChild) {
            resultsList.removeChild(resultsList.firstChild);
        }
    }

    // Defining function to filter items using a search term
    function filterItems(items, searchTerm) {
        const matchingItems = items.filter(function (item) {
            if (item.title.toLowerCase().search(searchTerm) > -1) {
                return true;
            } else {
                return false;
            }
        })
        return matchingItems;
    }

    // Defining function to insert matched items' details into list items
    function insertLiItems(matchedItems) {
        const insertFragment = document.createDocumentFragment();
        matchedItems.forEach(function (matchedItem) {
            const newLi = document.createElement("li");
            newLi.textContent = `${matchedItem.title} (${matchedItem.certificate})`;
            insertFragment.appendChild(newLi);
        });
        fightersList2.appendChild(insertFragment);
    }
    // ==========================================================

    clearResults(fightersList2);

    // const searchBox = document.querySelector("#search-box");
    const searchTerm = searchBox.value.toLowerCase()
    console.log(searchTerm);

    if (searchTerm.length >= 2) {
        // Calling function to filter items and passing in the films array and the value of the search term that was typed.
        // Assigning the returned matching items into a matchedItems const variable
        const matchedItems = filterItems(films, searchTerm)

        // Calling the function to insert items into list elements and pasing in the matchedItems variable.
        insertLiItems(matchedItems)
    }
} // end of doSearch, don't remove this line



const searchBox = document.querySelector("#search-box");
searchBox.addEventListener("keyup", doSearch);


/*
// Testing js search using film array
let searchTerm = "a";
let film = films[0];
console.log(film.title.search(searchTerm)) //outputs 1, the search term is found at the second character in the string
 
if(film.title.search(searchTerm)>-1){
  console.log(`The search term '${searchTerm}' was found.`);
}else{
  console.log(`The search term ${searchTerm} was not found.`);
}
*/

/*
// Testing js search using hard coded variables
let searchTerm = "T";
let title = "Test";
let film = films[0];
//console.log(film.title.search(searchTerm)) //outputs 1, the search term is found at the second character in the string
console.log(title.toLowerCase().search(searchTerm)) //outputs 1, the search term is found at the second character in the string
 
if(title.toLowerCase().search(searchTerm)>-1){
  console.log(`The search term '${searchTerm}' was found.`);
}else{
  console.log(`The search term ${searchTerm} was not found.`);
}
*/