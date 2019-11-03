String reverseInParentheses(String inputString) {
    
    String returnString = "";
 
    for(int i = 0; i < inputString.length(); i++){
        if (inputString.charAt(i) == '('){
            int counter = i;
            while(inputString.charAt(counter) != ')'){
                counter++;
                if (inputString.charAt(counter) == '(')){
                    
                }
            }
            for(int j = counter - 1; j > i; j-- ){
                returnString += Character.toString(inputString.charAt(j));
                
            }
            i = counter;
        }
        else {
            returnString += Character.toString(inputString.charAt(i));
        }
    }

    return returnString;

}