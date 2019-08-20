var roll = ["4", "2", "3", "4", "5"];
var roll1 = ["1", "2", "3", "4", "6"];

function test(roll) {
  const set1 = new Set(roll);

  if (set1.size > 3) {
    if (
      (set1.has("1") && !set1.has("6")) ||
      (!set1.has("1") && set1.has("6"))
    ) {
      console.log("right");
    } else {
      console.log("wrong");
    }
  } else {
    console.log("wrong");
  }
}

test(roll);
