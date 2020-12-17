package com.cg;

import java.util.regex.Pattern;

public class Main {

    //print if email fails validation according to algorithms rules: 1 - 6 letters, 0-1 underscores, 0-4 numbers 0 through 9
    public static void main(String[] args) {
        String[] emails = new String[]{"julia@hackerrank.com", "julia_@hackerrank.com", "julia_0@hackerrank.com", "julia0_@hackerrank.com", "julia@gmail.com"};
        validEmailAddress(emails);
    }

    public static void validEmailAddress(String[] emails) {
        for (String email : emails) {
            System.out.println(Pattern.compile("^[A-Za-z]{1,6}[_]?[0,9]{0,4}[@]hackerrank.com\\b").matcher(email).matches());
        }
    }

}
