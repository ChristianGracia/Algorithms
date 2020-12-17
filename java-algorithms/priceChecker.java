package com.cg;

import java.util.Arrays;

public class Main {


    public static void main(String[] args) {

        String[] products = new String[]{"eggs", "cheese", "milk"};
        double[] productPrices = new double[]{2.89, 3.29, 5.79};
        String[] productsSold = new String[]{"eggs", "eggs", "cheese", "milk"};
        double[] soldPrices = new double[]{2.89, 2.99, 5.97, 3.29};

        System.out.println(priceCheck(products, productPrices, productsSold, soldPrices));
        
    }

    public static int priceCheck
            (String[] products, double[] productPrices, String[] productsSold, double[] soldPrices) {

        int errorCounter = 0;
        for (int i = 0; i < productsSold.length; i++) {
            int indexOfProductSold = Arrays.asList(products).indexOf(productsSold[i]);
            if (productPrices[indexOfProductSold] != soldPrices[indexOfProductSold]) {
                errorCounter++;

            }

        }
        return errorCounter;
    }


}
