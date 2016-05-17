'use strict';

function double_to_one(collection) {
  var collection_b = buildOneArray(collection);

  return collection_b;
}

function buildOneArray(collection) {
  var collection_b = [];

  collection_b.push(collection[0]);
  for (var i = 1; i < collection.length; i++) {
    var length = collection[i].length;
    for (var j = 0; j < length; j++) {
      collection_b.push(collection[i][j]);
    }
  }

  return collection_b;
}

module.exports = double_to_one;
