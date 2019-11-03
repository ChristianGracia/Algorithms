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


String reverseInParentheses(String s) {

 char[] chars = s.toCharArray();
    int[] openPosStack = new int[chars.length];
    int openPosTop = -1;

    for (int i = 0; i < chars.length; i++) {
        switch (chars[i]) {
          case '(':
            // Push the index of the open parenthesis onto the stack
            openPosStack[++openPosTop] = i;
            break;
          case ')':
            // Reverse substring from the matching open parenthesis to here
            if (openPosTop < 0) {
                throw new IllegalArgumentException("Parenthesis mismatch");
            }
            int a, b;
            for (a = openPosStack[openPosTop--], b = i; a < b; a++, b--) {
                char swap = chars[a];
                chars[a] = chars[b];
                chars[b] = swap;
            }
        }
    }
    if (openPosTop >= 0) {
        throw new IllegalArgumentException("Parenthesis mismatch");
    }

    // Remove parentheses from output
    int o = 0;
    for (int i = 0; i < chars.length; i++) {
        switch (chars[i]) {
          case '(': case ')':
            break;
          default:
            chars[o++] = chars[i];
        }
    }
    return new String(chars, 0, o);
}