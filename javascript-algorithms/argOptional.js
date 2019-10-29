function addTogether() {
    var number = arguments[0];

    if (arguments.length == 2 && typeof arguments[1] != "number" || typeof arguments[0] == "string") {
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

