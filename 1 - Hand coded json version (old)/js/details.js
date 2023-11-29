function loadData(url,callback)
{
	fetch(url).then(function(response) {
		return response.json();
	}).then(function(json) {
		callback(json)
	});
} //end of loadData()




function populateContent(vehicle)
{
	const titleEl=document.querySelector("#name");
	// const capitalEl=document.querySelector("#capital");
	// const populationEl=document.querySelector("#population");
	// const continentEl=document.querySelector("#continent")
	titleEl.textContent = vehicle.result.properties.name;
	console.log(vehicle)
	// capitalEl.textContent = vehicle.capital;
	// populationEl.textContent = vehicle.population;
	// continentEl.textContent = vehicle.continent;
}


function init(){
	//URLSearchParams provides an easy method for getting data from the querystring e.g. details.html?id=3
	//see https://davidwalsh.name/query-string-javascript for more info
	const urlParams = new URLSearchParams(window.location.search);
	const id = urlParams.get("id");
	loadData("https://www.swapi.tech/api/vehicles/"+id,populateContent); //request a JSON file e.g. country3.json
}


init();
