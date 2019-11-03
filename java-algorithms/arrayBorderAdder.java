String[] addBorder(String[] picture) {
    int rowsLength = picture.length + 2;
    int charLength = picture[0].length();
    
    String[] array = new String[rowsLength];
    
   
            String stars = "";
            for (int j = 0; j < charLength; j++){
                stars += "*";
            }
            array[0] = stars;
            array[picture.length + 1] = stars;
        
    
    for(int i = 0; i < picture.length - 1; i++)
    {
        System.out.println(picture[i]);
        String temp = "*";
        temp += picture[i];
        temp += "*";
            array[i] = temp;
        
    }
    return array;

}
