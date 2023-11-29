function loadData(url,callback)
{
	fetch(url).then(function(response) {
		return response.json();
	}).then(function(json) {
		callback(json)
	});
} //end of loadData()

function populateList(fighters)
{
	const fightersList=document.querySelector("#fighters-list");
	fighters.forEach(function(fighter){
		const newLi=document.createElement("li");
		const newLink=document.createElement("a");
		const newSpan=document.createElement("span");
		newLink.textContent=fighter.name;
		newSpan.textContent= ` by ${fighter.location}`;
		//adds a querystring to the URL e.g. details.html?id=2
		newLink.setAttribute("href","details.html?id="+fighter.id);
		newLi.appendChild(newLink);
		newLi.appendChild(newSpan);
		fightersList.appendChild(newLi);
	})
} //end of populateList, do not remove this line

function init(){
	loadData("data/fighters.json",populateList);
}

init();
