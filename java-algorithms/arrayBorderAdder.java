String[] addBorder(String[] picture) {
    int rowsLength = picture.length + 2;
    int charLength = picture[0].length();
    
    String[] array = new String[rowsLength];
    
   
        String stars = "";
        for (int j = 0; j < charLength + 2; j++){
            stars += "*";
        }
        array[0] = stars;
        array[rowsLength -1] = stars;
        
    
    for(int i = 0; i < rowsLength -2; i++)
    {
        String temp = "*";
        temp += picture[i];
        temp += "*";
        array[i+ 1] = temp;
    }
    return array;

}