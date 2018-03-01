'use strict';
const api = (function () {
const = BASE_URL: 'https://thinkful-list-api.herokuapp.com/Jeff';

function getBookMark(callback){
  $.getJSON(BASE_URL +'/bookmarks',callback)
}
function createItem(name, callback){
  const newItem = JSON.stringify({name});

  $.ajax({
    'url': BASE_URL + '/bookmarks',
    'method': 'POST',
    'contentType': 'application/json',
    'data': newItem,
    'success': callback
  });

}
function updateItem(id, updateData, callback){
  const updateItemJSON = JSON.stringify(updateData);
  console.log(updateItemJSON);
  $.ajax({
    'url': BASE_URL + '/bookmarks/' + id,
    'method': 'PATCH',
    'contentType': 'application/json',
    'data': updateItemJSON,
    'success': callback
  });
}

};
return {
  getItems: getItems,
  createItem: createItem,
  updateItem: updateItem
};
}());