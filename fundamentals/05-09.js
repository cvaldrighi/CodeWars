//replace with alphabet position
function alphabetPosition(text) {
    let n = text.toLowerCase().split('');
    let res = [];
    const abc = [null,
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    n.forEach(e => {
        if (abc.includes(e)) {
            let i = abc.indexOf(e);
            res.push(i);
        }
    });

    return res.join().replace(/,/g, " ");
}

// how good are you really?
function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((cp, yp) => cp + yp) / classPoints.length;
}

// string repeat
function repeatStr(n, s) {
    let arr = [];

    for (var i = 0; i < n; i++) {
        arr = arr.concat(s);
    };

    return arr.join().replace(/,/g, "");
}

//square sum
function squareSum(numbers) {
    let total = 0
    numbers.forEach(number => {
        total += (number * number)
    })
    return total;
}

// convert number to reversed array of digits
function digitize(n) {
    let arr = Array.from(String(n), Number);

    return arr.reverse();
}

// your order, please
function order(words) {
    return words.split(' ').sort(function (a, b) {
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}

//n of people in the bus
var number = function (busStops) {
    let count = 0;
    for (let n of busStops) {
        count += n[0] - n[1];
    }
    return count;
}

// is triangle?
function isTriangle(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        return false;
    } else {
        return true;
    }
}

// make negative
function makeNegative(num) {
    if (num <= 0) {
        return num
    } else {
        return num * -1
    }
}





