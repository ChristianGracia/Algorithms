boolean isIPv4Address(String inputString) {
    
    String[] stringSplit = inputString.split("[.]");
    
    if (stringSplit.length != 4){
        return false;
    }
  
    for(int i = 0; i < stringSplit.length; i++){
        
        String number = stringSplit[i];
    
        
          try {  
	        int num = Integer.parseInt(number);  
              
            if (num < 0 || num > 255){
            return false;
            }
              
	        
	      } catch (NumberFormatException e) {  
	         return false;  
	      }  
  

    }
    return true;
    


}
