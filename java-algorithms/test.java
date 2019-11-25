public Test {
    public static Main(String[] args){


           String text = "Symbol
Last Price Change Chg % Currency Market Time Volume Shares Avg Vol (3m) Day Range 52-Wk Range Day Chart Market Cap Buy/Sell
BAT-USD
0.2349 -0.0180 -7.12% USD 5:48PM GMT 56.818M - 34.405M 318.642M -
DOGE-USD
0.0026 -0.0001 -3.12% USD 5:48PM GMT 90.273M - 45.81M 322.171M -
MIOTA-USD
0.2626 -0.0096 -3.51% USD 5:48PM GMT 8.016M - 6.924M 729.775M -
BNB-USD
19.59 -1.06 -5.12% USD 5:48PM GMT 188.612M - 211.329M 3.047B -
TRX-USD
0.0187 -0.0009 -4.71% USD 5:48PM GMT 1.15B - 666.088M 1.247B -
LTC-USD
59.77 -2.18 -3.52% USD 5:48PM GMT 3.377B - 2.836B 3.803B
Trade
BCH-USD
278.68 -15.00 -5.11% USD 5:48PM GMT 2.108B - 1.662B 5.045B
Trade
XRP-USD
0.2759 -0.0166 -5.68% USD 5:48PM GMT 1.934B - 1.392B 11.931B -
ETH-USD
184.02 -4.02 -2.14% USD 5:48PM GMT 9.16B - 7.596B 19.962B
Trade
BTC-USD
8,828.25 -433.14 -4.68% USD 5:48PM GMT 24.261B - 17.809B 159.227
Trade";

 String bitcoinInfo = text.substring(text.indexOf("BAT-USD")).replace("Trade", "").replace("-","").replace("\n", "");
		 
		 System.out.println(bitcoinInfo);
    }
    }
}