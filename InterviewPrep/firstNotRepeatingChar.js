function firstNotRepeatingCharacter(s) {
    
    let arr = s.split('');
    
    let arrMap = new Map();
    
    let key = "key";
    
    for (var i = 0; i < s.length;){
       
        if (arrMap.find(s.charAt(i)))
        {
             arrMap.set(s.charAt(i), key);
        }
        
    }

}

//needs work