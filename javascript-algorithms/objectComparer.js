function whatIsInAName(collection, source) {
  var arr = [];

  collection.forEach(x => {
    var check = true;
    for (var j = 0; j < Object.keys(source).length; j++) {
      if (
        !x.hasOwnProperty(
          Object.keys(source)[j] ||
            x[Object.keys(source)[j]] !== source[Object.keys(source)[j]]
        )
      ) {
        check = false;
      }
    }
    if (check) {
      arr.push(x);
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
