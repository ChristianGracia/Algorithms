function spinalCase(str) {

    var spinalTap = str.replace(/\s+|_+/g, "-").toLowerCase();

    console.log(spinalTap);

    return spinalTap;

}