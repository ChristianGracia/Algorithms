function spinalCase(str) {

    var spinalTap = str.replace(/\s+|_+/g, "-")

    for (var i = 1; i < spinalTap.length; i++) {
        if (spinalTap[i] == spinalTap[i].toUpperCase()) {
            console.log("found");
        }
    }
    return spinalTap.toLowerCase();
}
spinalCase('whatIsUp');