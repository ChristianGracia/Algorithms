package com.cg;

public class Main {

    public static void main(String[] args) {
        System.out.println(lastLetters("apple"));
    }

    public static String lastLetters(String word){
        return new StringBuilder(word.substring(Math.max(word.length() - 2, 0))).reverse().insert(1, " ").toString();
    }
}
