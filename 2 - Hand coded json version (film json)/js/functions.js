// Filter items using a search term
function filterItems(items, searchTerm) {
    const matchingItems = items.filter(function(item) {
      if(item.title.toLowerCase().search(searchTerm) >-1) {
        return true;
      }else {
        return false;
      }
    })
    return matchingItems;
  }

// Insert film details into list items
function insertLiItems (matchedItems) {
    const insertFragment = document.createDocumentFragment();
    matchedItems.forEach(function(matchedItem){
      const newLi = document.createElement("li");
      newLi.textContent = `${matchedItem.title} (${matchedItem.certificate})`;
      insertFragment.appendChild(newLi);
  });
  filmsList.appendChild(insertFragment);
  }