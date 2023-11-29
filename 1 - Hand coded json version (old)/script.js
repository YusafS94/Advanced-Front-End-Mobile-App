// fetch("https://swapi.dev/api/people/").then(function(response) {
//     return response.json();
// }).then(function(json) {
//     displayData(json);
// });

const displayData = function(data) {
    console.log(data.results);
    const newFragment = document.createDocumentFragment;
    const newP = document.createElement("p");
    
}
let peopleArray = [];
peopleArray = fetch("https://swapi.dev/api/people/").then(function(response) {
    return response.json();
}).then(function(json) {
    displayData(json);
});


