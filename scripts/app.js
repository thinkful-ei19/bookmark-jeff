function generateItemElement(item, itemIndex, template) {
  return `
  <div class="box-1">
          <li class="bk">
            <h2 class="title">
              <a target="_blank" href="${item.url}">${item.title}</a>
            </h2>
            <p>
              ${item.description}
            </p>
          <button>Edit</button>
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



function renderBookmark() {
  // render the shopping list in the DOM
  console.log('`renderShoppingList` ran');
  const shoppingListItemsString = generateBookmarkItemsString(STORE.bookmark);
  // insert that HTML into the DOM
  $('#bookmarks').html(shoppingListItemsString);
}

function checkBoxBookmark(){
 const test =$('input[type=check][name=showbox]').toggle( "checked", false );
 console.log(test)
}
function handleShoppingList() {
  renderBookmark();
};

// when the page loads, call `handleShoppingList`
$(handleShoppingList);