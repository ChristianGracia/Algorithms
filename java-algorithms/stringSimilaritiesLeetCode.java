ArrayList<String> chars = new ArrayList<String>();
        ArrayList<String> matches = new ArrayList<String>();
        
        for (String item : J){
            chars.add(item);
        }
        
        for (String letter : chars){
            for(String otherListLetter : S){
                if (leter == otherListLetter && !matches.contains(letter)){
                    matches.add(letter);
                }
            }
          
        }
        return matches.size();
