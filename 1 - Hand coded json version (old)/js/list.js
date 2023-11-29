function loadData(url,callback)
{
	fetch(url).then(function(response) {
		return response.json();
	}).then(function(json) {
		callback(json)
	});
} //end of loadData()

function populateList(data)
{
	console.log(data)
	const vehList=document.querySelector("#veh-list");
	data.results.forEach(function(vehicle){
		const newLi=document.createElement("li");
		const newLink=document.createElement("a");
		newLink.textContent=vehicle.name;
		//adds a querystring to the URL e.g. details.html?id=2
		newLink.setAttribute("href","details.html?id="+vehicle.uid);
		newLi.appendChild(newLink);
		vehList.appendChild(newLi);
	})
} //end of populateList, do not remove this line

function init(){
	// loadData("data/countries.json",populateList);
	loadData("https://www.swapi.tech/api/vehicles/",populateList);
}

init();
