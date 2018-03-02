function generateItemElement(item, itemIndex, template) {
  return `
  <div class="box-1">
  <li class="bk">
    <h2 class="title">
      <a target="_blank" href="${item.url} ">${item.title}</a>
    </h2>
    <select id="rating-drop-down">
        <option value="rating2" selected>Rating 1</option>
        <option value="rating1">Rating 2</option>
        <option value="rating3">Rating 3</option>
        <option value="rating3">Rating 4</option>
        <option value="rating3">Rating 5</option>
    </select>
    <p>
      ${item.description}
    </p>
  <button >Delete</button>
  <button>Expand</button>
</li>
</div>
        `;
}



function generateBookmarkItemsString(book) {
  console.log("Generating shopping list element");

  const items = book.map((item, index) => generateItemElement(item, index));
  return items.join("");
}
function renderShoppingList() {
  // render the shopping list in the DOM
  console.log('`renderShoppingList` ran');
  const shoppingListItemsString = generateShoppingItemsString(STORE.items);
  // insert that HTML into the DOM
  $('.js-shopping-list').html(shoppingListItemsString);
}


function renderBookmark() {
  // render the shopping list in the DOM
  console.log('`renderShoppingList` ran');
  const shoppingListItemsString = generateBookmarkItemsString(STORE.bookmark);
  // insert that HTML into the DOM
  $('#bookmarks').html(shoppingListItemsString);
}

function checkBoxBookmark(){
 const test =$('input[type=submit][name=showbox]').toggle( "checked", false );
 console.log(test)
}
function handleShoppingList() {
  renderBookmark();
};

// when the page loads, call `handleShoppingList`
$(handleShoppingList);