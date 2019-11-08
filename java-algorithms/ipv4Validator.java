boolean isIPv4Address(String inputString) {
    String[] split = inputString.split(".");
    if (split.length != 4){
        return false;
    }
    for(String item : split){
        int num = Integer.parseInt(item);
        System.out.println(num);
        if (num < 0 || num > 255){
            return false;
        }
    }
    return true;
    

}