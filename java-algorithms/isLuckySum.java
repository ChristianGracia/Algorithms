boolean isLucky(int n) {

 int digitLength = 1;
 double c = (double) n;

 while (c > 10) {
  digitLength++;
  c /= 10;
 }

 String secondHalf = Integer.toString((int)(n % (Math.pow(10, digitLength / 2))));
 String firstHalf = Integer.toString((int)(n / (Math.pow(10, digitLength / 2))));

 int firstSum = 0;
 int secondSum = 0;


 for (int i = 0; i < secondHalf.length(); i++) {

  secondSum += Character.getNumericValue(secondHalf.charAt(i));
 }

 for (int j = 0; j < firstHalf.length(); j++) {

  firstSum += Character.getNumericValue(firstHalf.charAt(j));
 }

 if (firstSum == secondSum) {
  return true;

 }
 return false;
}