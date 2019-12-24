int maxDigit(int n) {
 int number = n;
 int highestDigit = 0;

 while (number > 9) {
  if (number % 10 > highestDigit) {
   highestDigit = number % 10;

  }

  number = number / 10;
 }



 return highestDigit;

}