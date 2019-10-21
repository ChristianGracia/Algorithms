function weaponDamage(x, y) {
  var dice = x * (Math.floor(Math.random() * y) + 1);
  console.log(dice);

  return dice;
}

weaponDamage(2, 5);
