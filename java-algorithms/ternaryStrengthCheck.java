boolean areEquallyStrong(int yourLeft, int yourRight, int friendsLeft, int friendsRight) {
    
    int yourStrongestArm = (yourLeft > yourRight) ? yourLeft : yourRight;
    int theirStrongestArm = (friendsLeft > friendsRight) ? friendsLeft : friendsRight;
    
    int yourWeakArm = (yourLeft > yourRight) ? yourRight : yourLeft;
    int theirWeakArm = (friendsLeft > friendsRight) ? friendsRight : friendsLeft;
    
    
    
    if(yourStrongestArm == theirStrongestArm && yourWeakArm == theirWeakArm){
        return true;
    }
    return false;

}
