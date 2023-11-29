const loadData = function(URL, callback) {
    fetch(URL).then(function(response) {
        return response.json();
    }).then(function(json) {
        callback(json);
    })
}
const displayData = function(products) {
    console.log(products);
}

loadData("https://fakestoreapi.com/products", displayData);
loadData("https://randomuser.me/api/", displayData);