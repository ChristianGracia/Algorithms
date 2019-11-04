boolean isIPv4Address(String inputString) {
    String[] words = inputString.split("\\.");
       if(words.length != 4){
        return false;
    }
    int counter = 0;
    int[] array = new int[inputString.length()];
    
//     for(String item : words){
//         array[counter] = Integer.parseInt(item);
//         // Integer num = Integer.parseInt(item);
   
//         // if (Integer.parseInt(item) < 0 ||  Integer.parseInt(item) > 255){
//         //     return false;
//         // }
//     }
    
    for (String item : words){
             System.out.println(Integer.parseInt(item));
    }
    
 
    return true;

}
