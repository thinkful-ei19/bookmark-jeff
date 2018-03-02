'use strict';
const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Jeff';

  function getBookMarks(callback) {
    $.getJSON(BASE_URL + '/bookmarks', callback)
  }

  function createBookmark(bookmark, callback) {
    const newItem = JSON.stringify(
      bookmark
    );

    $.ajax({
      'url': BASE_URL + '/bookmarks',
      'method': 'POST',
      'contentType': 'application/json',
      'data': newItem,
      'success': callback
    });

  }

  function deleteMark(id,callback) {
    $.ajax({
      'url': BASE_URL + '/bookmarks/' + id,
      'method': 'DELETE',
      'success': callback
    });
  }


  return {
    getBookMarks,
    createBookmark,
    deleteMark
  }

}());