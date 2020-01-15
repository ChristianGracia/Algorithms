var findComplement = function (num) {
    return parseInt(num.toString(2).split('').map(bit => 1 - bit).join(''), 2)
};