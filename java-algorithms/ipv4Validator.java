boolean isIPv4Address(String inputString) {
    
    String[] stringSplit = inputString.split("[.]");
    
    if (stringSplit.length != 4){
        return false;
    }
  
    for(int i = 0; i < stringSplit.length; i++){
        
        String number = stringSplit[i];
    
         int num = Integer.parseInt(number);
         System.out.println(num);
//         if (num < 0 || num > 255){
//             return false;
//         }
    }
    return true;
    


}
