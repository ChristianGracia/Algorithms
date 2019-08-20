var roll = ["2", "2", "2", "1", "4"];
var roll1 = ["1", "2", "3", "4", "6"];

function straight(roll) {
  var object = {};
  var result = [];

  roll.forEach(function(item) {
    if (!object[item]) {
      object[item] = 0;
    }
    object[item] += 1;
  });

  for (var prop in object) {
    if (object[prop] >= 2) {
      result.push(prop);
    }
  }
  console.log(parseInt(result[0]) * 3);
}

straight(roll);
