function addTogether() {
    console.log(arguments[1]);
    var number = arguments[0];

    if (typeof arguments[1] != "number") {
        return undefined;
    }

    if (arguments.length > 1) {

        return arguments[0] + arguments[1];

    }
    function sumTwoAnd(c) {
        return c + number
    }
    return sumTwoAnd;

}

addTogether(2, 3);