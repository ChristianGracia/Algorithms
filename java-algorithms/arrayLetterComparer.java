int commonCharacterCount(String s1, String s2) {

 int count = 0;

 for (int i = 0; i < s1.length(); i++) {
  for (int j = 0; j < s2.length(); j++) {
   if (s1.charAt(i) == s2.charAt(j)) {
    String pattern = Character.toString(s2.charAt(j));
    s2 = s2.replaceFirst(pattern, " ");
    count++;
    break;
   }

  }

 }

 return count;

}