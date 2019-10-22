function ObjectCompareAndReturn(collection, source) {
  var arr = [];
  var sourceKeys = Object.keys(source);

  collection.forEach(collectionItem => {
    var check = true;
    for (var index = 0; index < sourceKeys.length; index++) {
      if (
        !collectionItem.hasOwnProperty(sourceKeys[index]) ||
        collectionItem[sourceKeys[index]] !== source[sourceKeys[index]]
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
