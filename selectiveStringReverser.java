String reverseInParentheses(String inputString) {

 String returnString = "";

 for (int i = 0; i < inputString.length(); i++) {
  if (inputString.charAt(i) == '(') {
   int counter = i;
   while (inputString.charAt(counter) != ')') {
    counter++;

    if (inputString.charAt(counter) == '(') {
     String doubleParentheses = "";
     String firstParentheses = inputString.substring(i + 1, counter);
     int k = counter + 1;

     for (; inputString.charAt(k) != ')'; k++) {
      k++;
     }
     for (int l = k - 2; l > counter; l--) {
      doubleParentheses += Character.toString(inputString.charAt(l));

     }


     String reversed = firstParentheses + doubleParentheses;
     String finalString = "";
     for (int m = reversed.length() - 1; m > -1; m--) {
      finalString += Character.toString(reversed.charAt(m));
     }
        System.out.println(finalString);
        return inputString.substring(0, i) + finalString + inputString.substring(k + 1);
  



    }
   }
   for (int j = counter - 1; j > i; j--) {
    returnString += Character.toString(inputString.charAt(j));

   }
   i = counter;
  } else {
   returnString += Character.toString(inputString.charAt(i));
  }
 }

 return returnString;

}