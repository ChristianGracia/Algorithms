function dateCheck(month,year) {
    
    // this suprisingly works
    
    var date = new Date();
    var currentMonth = date.getMonth();
    var currentYear = date.getFullYear();
    var yearSub = currentYear - year;
    var monthsTill = 0;
    
    for (var i = month; i < 12; i++)
    {
        monthsTill++;
    }
    
    var yearsTill = 0;
    
    for(var b = 1; b < yearSub; b++)
    {
        yearsTill++;
    }

    var monthsAfter = 1;
    
    for(var c = 0; c < currentMonth; c++)
    {
        monthsAfter++;
    }

    var total = (monthsTill/12) + (yearsTill) + (monthsAfter/12);
    var totalFixed = total.toFixed(2);
    
    console.log("total is " + totalFixed);
}

dateCheck(12,2014);

console.log(Date.now())

var date1 = new Date(6, 1950);
console.log(date1);