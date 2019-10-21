function truncateString(str, num) {
  if (str.length >= num + 1) {
    var newString = str.slice(0, num) + "...";
    return newString;
  }
  return str;
}
