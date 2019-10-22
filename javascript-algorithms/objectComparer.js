function whatIsInAName(collection, source) {
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

  console.log(arr);

  return arr;
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);
