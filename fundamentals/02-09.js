// complementary DNA
function DNAStrand(dna) {
    dna.split("");
    let res = [];

    for (i = 0; i < dna.length; i++) {
        if (dna[i] == "A") {
            res.push("T");
        }
        if (dna[i] == "T") {
            res.push("A");
        }
        if (dna[i] == "C") {
            res.push("G");
        }
        if (dna[i] == "G") {
            res.push("C");
        }
    }

    return res.join().replace(/,/g, "");
}

//summation(5) -> 15 (1+2+3+4+5)
var summation = function (num) {

    if (num > 0) {
        return num * (num + 1) / 2
    }
}

// sum of odd numbers
function rowSumOddNumbers(n) {
    return n * n * n;
}

//fake binary
function fakeBin(x) {
    let str = [];
    let n = x.split('');

    n.forEach(e => {
        if (e < 5) {
            str.push('0');
        } else {
            str.push('1');
        }
    })

    return str.join().replace(/,/g, "");
}

//keep hydrated
function litres(time) {
    let l = time / 2;
    return Math.floor(l);
}

// reverse words
function reverseWords(str) {

    return str
        .split("")
        .reverse()
        .join("")
        .split(" ")
        .reverse()
        .join(" ");
}

// clock in miliseconds
function past(h, m, s) {
    let msPerHour = h * 60 * 60 * 1000;
    let msPerMinute = m * 60 * 1000;
    let msPerSecond = s * 1000;

    let total = msPerHour + msPerMinute + msPerSecond;
    return total;
}

// basic math op
function basicOp(operation, value1, value2) {
    let op = `${value1}${operation}${value2}`;
    return eval(op);
}

// is he gonna survive?
function hero(bullets, dragons) {
    let x = dragons * 2;
    if (x <= bullets) {
        return true;
    } else {
        return false;
    }
}

// reversed sequence 
const reverseSeq = n => {
    let arr = [];
    if (n > 0) {
        for (i = n; i >= 1; i--) {
            arr.push(i);
        }
    }

    return arr;
};

// string ends with
function solution(str, ending) {
    let res = str.endsWith(ending);
    return res;
}

// jaden casing strings
String.prototype.toJadenCase = function () {
    return this.split(" ").map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
};

// Binary Addition
function addBinary(a, b) {
    let sum = a + b;
    return sum.toString(2);
}



