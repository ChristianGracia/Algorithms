function palindrome(str) {
  var inputString = str
    .replace(/_/g, "")
    .replace(/,/g, "")
    .replace(/./g, "")
    .replace(/\s/g, "")
    .toLowerCase();
  var emptyString = "";
  var length = inputString.length - 1;

  for (var i = length; i > -1; i--) {
    emptyString += inputString[i];
  }

  if (emptyString == inputString.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

palindrome("eye");
