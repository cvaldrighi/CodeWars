
//bool to word
function boolToWord(bool) {
    if (bool == true) {
        return "Yes"
    } else {
        return "No"
    }
}

//even or odd
function even_or_odd(number) {
    if (number % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

//min or max
var min = function (list) {
    return Math.min(...list);
}

var max = function (list) {
    return Math.max(...list);
}

//multiplying the values (array) together in order
function grow(x) {
    return x.reduce((result, i) => result * i, 1);
}

//inverting each number of array
function invert(array) {
    return array.map(num => num * -1);
}

// convert boolean (or anything else) to string
function booleanToString(b) {
    return b.toString();
}

// to upperCase
function makeUpperCase(str) {
    return str.toUpperCase();
}

// if number is an even, multiply to 8, else to 9
function simpleMultiplication(number) {
    if (number % 2 == 0) {
        return number * 8;
    } else {
        return number * 9
    }
}