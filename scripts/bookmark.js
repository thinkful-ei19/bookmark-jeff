/* global api */
const bookmarkList = (function () {

  function generateItemElement(item) {
    return `
  <div data-bookmark-id="${item.id}" class="box-1 ">
  <li  class="bk">
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
    <p class="hidden">
      ${item.description}
    </p>
  <button data-bookmark-id="${item.id}" class="delButton">Delete</button>
  <button data-bookmark-id="${item.id}">Expand</button>
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
   console.log(STORE.bookmarks)
    // render the shopping list in the DOM
    console.log('`renderShoppingList` ran');
    const bookListItemsString = generateBookmarkItemsString(STORE.bookmarks);
    // insert that HTML into the DOM
    $('#bookmarks').html(bookListItemsString);
  }

  function getBookmarks(){
    api.getBookMarks(function(response){
      STORE.bookmarks = response;
      renderBookmark();

    })
  }
  function getFilterB(ratingFilter){
    api.getBookMarks(function(response){
      STORE.bookmarks = response.filter(function(item){
        return  item.rating <= ratingFilter
      })
      renderBookmark();

    })
  }

  function addItemToShoppingList(itemName,url,description,rating) {
    console.log(`Adding "${itemName}" to shopping list`);
    const newBookmark = {
      id: cuid(),
      title: itemName,
      url: url,
      description: description,
      rating:rating
    }
    STORE.bookmarks.push(newBookmark);
    saveBookMark(newBookmark)
  }
 function saveBookMark(bookmark){
   api.createBookmark(bookmark,function(response){
     console.log(response)
   })

    

 }

  function handleNewBookmark() {
    $('#book-method').submit(function (event) {
      event.preventDefault();
      console.log('`handleNewBookmark ` ran');
      const newItemName = $('.book-entry').val();
      $('.book-entry').val('');
      const newItemName2 = $('.book-entry-2').val();
      $('.book-entry-2').val('');
      const newItemName3 = $('.book-entry-3').val();
      $('.book-entry-3').val('');
      const newItemName4 = $('#rating-drop-down').val();
      $('#rating-drop-down').val('1')
      addItemToShoppingList(newItemName,newItemName2,newItemName3,newItemName4);
      renderBookmark();
    });
  }
  function handleDeleteBookmark(){
    $('#bookmarks').on('click','.delButton',function(event){
      const delBookmark = $(event.currentTarget).attr('data-bookmark-id')
      $( `div[data-bookmark-id="${delBookmark}"]`).remove()
      getRidBookmark(delBookmark);
      getBookmarks()
    })
  }
  function getRidBookmark(id){
    api.deleteMark(id,function(response){
    console.log(response);
  
    });
  }

  function handleShoppingList() {
    getBookmarks();
    handleNewBookmark();
    handleDeleteBookmark();
  };

  // when the page loads, call `handleShoppingList`
  $(handleShoppingList);
  return {
    getBookmarks,
    renderBookmark
  };
}());