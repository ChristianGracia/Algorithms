String[] allLongestStrings(String[] inputArray) {
 List < String > words = new ArrayList < > ();

 int wordLength = 0;

 for (String item: inputArray) {
  if (item.length() > wordLength) {
   wordLength = item.length();
  }
 }
 
 for (String item: inputArray) {
  if (item.length() == wordLength) {
   words.add(item);
  }
 }
 return words.toArray(new String[words.size()]);
}

//time 14 mins