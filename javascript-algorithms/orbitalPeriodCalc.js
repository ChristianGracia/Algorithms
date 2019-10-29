function orbitalPeriod(arr) {
  var newArr = [];
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  for (var i = 0; i < arr.length; i++) {
    let orbitalTime =
      2 * Math.PI * Math.sqrt(Math.pow(arr[i].avgAlt + earthRadius, 3) / GM);
    orbitalTime = Math.round(orbitalTime);
    newArr.push({ name: arr[i].name, orbitalPeriod: orbitalTime });
  }

  console.log(newArr);
  return newArr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);

//time 9 mins
