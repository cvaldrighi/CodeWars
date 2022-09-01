// reverse string
function solution(str) {
    var split = str.split("");
    var reverse = split.reverse();
    var join = reverse.join("");

    return join;
}

// square every digit
function squareDigits(num) {
    var n = num.toString();
    var split = n.split("");
    var square = split.map(x => x * x).join('');

    return parseInt(square);
}

// is square?
var isSquare = function (n) {
    if (n < 0) {
        return false;
    }
    if (Number.isInteger(Math.sqrt(n))) {
        return true;
    } else {
        return false;
    }
}

// check if the amount of x's and o's is equal
function XO(str) {
    let arr = str.toLowerCase().split("");
    let x = 0;
    let o = 0;

    arr.forEach(e => {
        if (e === 'x') {
            x += 1;
        }
    })

    arr.forEach(e => {
        if (e === 'o') {
            o += 1;
        }
    })

    if (x != o) {
        return false;
    }

    return true;
}

// find needle at haystack
function findNeedle(haystack) {
    let index = haystack.indexOf("needle");
    let res = `found the needle at position ${index}`;
    return res;
}

// sum only positive numbers from array
function positiveSum(arr) {
    let sum = 0;

    arr.forEach(e => {
        if (e > 0) {
            sum += e;
        }
    })

    return sum;
}

// replace all whitespaces
function noSpace(x) {
    return x.replace(/\s+/g, '');
}

// return new array with doubled value
function maps(x) {
    return x.map(e => e * 2);
}

// takes the century of an year
function century(year) {
    return Math.ceil(year / 100);
}

// remove vowels
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

// find next perfect square
function findNextSquare(sq) {
    if (Number.isInteger(Math.sqrt(sq))) {
        return (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1);
    } else {
        return -1;
    }
}

// accum example: accum("abcd") -> "A-Bb-Ccc-Dddd"
function accum(s) {
    const txt = s.toLowerCase();
    const arr = [];

    for (let i = 0; i < txt.length; i++) {

        let str = txt[i].toUpperCase();

        for (let x = 0; x < i; x++) {
            str += txt[i]
        }

        arr.push(str);
    }

    return arr.join("-");
}

// convert binary arr to equivalent decimal
const binaryArrayToNumber = arr => {
    let x = arr.join().replace(/,/g, "");
    let res = parseInt(x, 2);

    return res;
};