int maxDigit(int n) {
 int c = n;
 int highestDigit = 0;
 System.out.println(n % 10);

 while (c > 9) {
  if (c % 10 > highestDigit) {
   highestDigit = c % 10;

  }

  c = c / 10;
 }



 return highestDigit;

}