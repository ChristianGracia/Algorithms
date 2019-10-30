int lateRide(int n) {
    int hours = n / 60;
    int minutes = n % 60;
    return addTwoDigits(hours) + addTwoDigits(minutes);
}
int addTwoDigits(int n) {
    return n/10 + n % 10;
}