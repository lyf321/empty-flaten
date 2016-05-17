'use strict';

function double_to_one(collection) {
  var collection_b = buildOneArray(collection);
  var one = deleteRepeat(collection_b);

  return one;
}

function buildOneArray(collection) {
  var collection_b = [];

  for(var i=0; i<collection.length; i++){
    collection[i].forEach(function (one) {
      collection_b.push(one);
    });
  }

  return collection_b;
}

function deleteRepeat(collection_b) {
  for(var i=0; i<collection_b.length; i++){
    for(var j=i+1; j<collection_b.length; j++){
      if(collection_b[i]===collection_b[j]){
        collection_b.splice(j,1);
        j--;
      }
    }
  }

  return collection_b;
}

module.exports = double_to_one;
