var roll = ["2", "2", "3", "1", "4"];
var roll1 = ["1", "2", "3", "4", "6"];

function straight(roll) {
  const set1 = new Set(roll);

  if (set1.size > 3) {
    if (
      (set1.has("1") && !set1.has("6")) ||
      (!set1.has("1") && set1.has("6"))
    ) {
      console.log("Small straight!\nscore: 30");
    } else {
      console.log("incorrect choice");
    }
  } else {
    console.log("incorrect");
    scorer(rollArray, counter);
  }
}

straight(roll);
