function ObjectCompareAndReturn(collection, source) {
  var arr = [];
  var sourceKeys = Object.keys(source);

  collection.forEach(collectionItem => {
    var check = true;
    for (var j = 0; j < sourceKeys.length; j++) {
      if (
        !collectionItem.hasOwnProperty(sourceKeys[j]) ||
        collectionItem[sourceKeys[j]] !== source[sourceKeys[j]]
      ) {
        check = false;
      }
    }
    if (check) {
      arr.push(collectionItem);
    }
  });

  return arr;
}
