var readlineSync = require("readline-sync");
var interest = {
  balance: 0,
  interest: 0,
  years: 0,
  months: 0,
  deposit: 0,

  askParams: function() {
    //get balance
    var initialBalance = readlineSync.question(
      "What is your current balance?\n"
    );
    this.balance = initialBalance;
    console.log("Balance is " + this.balance);

    //get interest
    var initialInterest = readlineSync.question(
      "\nWhat is the monthly interest rate?\n"
    );
    this.interest = initialInterest;
    console.log("Interest is " + this.interest);

    //get years
    var initialYears = readlineSync.question("\nHow many years?\n");
    this.years = initialYears;
    console.log("Years = " + this.years);
  },

  findInterest: function() {
    let currentBalance = parseInt(this.balance);

    let monthlyGain = currentBalance * this.interest;
    console.log(monthlyGain);

    currentBalance += parseInt(monthlyGain);
    this.balance = currentBalance.toFixed(2);
    console.log(this.balance);
    this.months++;
  },
  interestPerYear: function() {
    for (var i = 0; i < this.years; i++) {
      for (var j = 0; j < 12; j++) {
        this.findInterest();
      }
    }
    this.depositQuestion();

    if (this.deposit > 0) {
      var total = this.balance + this.deposit;
    }
    console.log(total);
  },
  depositQuestion: function() {
    var question = readlineSync.question(
      "Do you want to make a deposit? yes or no"
    );

    if (question == "yes") {
      var depositTotal = readlineSync.question("How much?");

      this.deposit = depositTotal;
    } else {
      this.deposit = 0;
    }
  }
};

interest.askParams();
interest.interestPerYear();
