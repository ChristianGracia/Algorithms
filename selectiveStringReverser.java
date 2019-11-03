String reverseInParentheses(String inputString) {
    
    String returnString = "";
 
    for(int i = 0; i < inputString.length(); i++){
        if (inputString.charAt(i) == '('){
            int counter = i;
            while(inputString.charAt(i) != ')'){
                counter++;
            }
            for(int j = i; j < counter; j++ ){
                inputString.charAt(j) = inputString.charAt(counter);
                counter--;
            }
        }
    }

    return inputString;

}