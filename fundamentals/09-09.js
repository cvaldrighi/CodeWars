//sum two
function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {

        for (let j = i + 1; j < numbers.length; j++) {

            let res = numbers[i] + numbers[j]

            if (res == target) return [i, j]
        }
    }
}

//find odd int
function findOdd(A) {
    var count = 0;
    for (var i = 0; i < A.length; i++) {

        for (var j = 0; j < A.length; j++) {
            if (A[i] == A[j]) {
                count++;
            }
        }

        if (count % 2 != 0) {
            return A[i];
        }
    }
};

//sort the odd
function sortArray(array) {
    let odd = [];
    let even = [];
    let res = [];

    for (let i = 0; i < array.length; i += 1) {
        if (array[i] % 2 === 0) {
            even.push(array[i]);
        } else {
            odd.push(array[i]);
        }
    }

    odd.sort((a, b) => a - b);

    for (let i = 0; i < array.length; i += 1) {
        if (array[i] % 2 === 0) {
            res.push(even.shift());
        } else {
            res.push(odd.shift());
        }
    }

    return res;
}

//abbreviate name (Carol Valdrighi => C.V);
function abbrevName(name) {

    let res = [];

    let x = name.split(" ");
    x.forEach(e => {
        res.push(e.charAt(0).toUpperCase());
    });

    return res.join('.');
}

//get the middle
function getMiddle(s) {

    let position;
    let length;

    if (s.length % 2 == 1) {
        position = s.length / 2;
        length = 1;
    } else {
        position = s.length / 2 - 1;
        length = 2;
    }

    return s.substring(position, position + length);
}

// double char
function doubleChar(str) {
    let res = [];
    let s = str.split("");

    s.forEach(e => {
        res.push(e + e);
    })

    return res.join('');
}

//traffic lights
function updateLight(current) {
    let output;

    switch (current) {
        case 'yellow': output = "red"; break
        case 'green': output = "yellow"; break
        case 'red': output = "green"; break
    }

    return output;
}

//other angle
function otherAngle(a, b) {
    let angle = 180;
    let sum = a + b;
    return angle - sum;
}

//filter list
function filter_list(l) {
    let res = [];

    l.forEach(e => {
        if (typeof e == "number") {
            res.push(e);
        }
    })

    return res;
}

// Parse nice int from char problem
function getAge(inputString) {
    return parseInt(inputString.charAt(0));
}

// count char at string
function count(string) {

    const count = {};

    for (const el of string) {
        if (count[el]) {
            count[el] += 1;
        } else {
            count[el] = 1;
        }
    }
    return count;
};

//direction reduction
function dirReduc(arr) {
    const opposites = {
        'NORTH': 'SOUTH',
        'EAST': 'WEST',
        'SOUTH': 'NORTH',
        'WEST': 'EAST'
    };

    return arr.reduce((acc, cur) =>
    (opposites[acc.slice(-1)] === cur ?
        acc.pop() : acc.push(cur), acc), [])
}


//rock paper scissors
const rps = (p1, p2) => {
    if (p1 === "scissors" && p2 === "paper") {
        return "Player 1 won!";
    }

    if (p1 === "paper" && p2 === "scissors") {
        return "Player 2 won!";
    }

    if (p1 === "scissors" && p2 === "rock") {
        return "Player 2 won!";
    }

    if (p1 === "rock" && p2 === "scissors") {
        return "Player 1 won!";
    }

    if (p1 === "paper" && p2 === "rock") {
        return "Player 1 won!";
    }

    if (p1 === "rock" && p2 === "paper") {
        return "Player 2 won!";
    }

    if (p1 === p2) {
        return "Draw!"
    }
};

//twice as old
function twiceAsOld(dadYearsOld, sonYearsOld) {
    let twice = sonYearsOld * 2;
    if (dadYearsOld > twice) {
        return dadYearsOld - twice;
    } else {
        return twice - dadYearsOld;
    }
}

//unique in order (AAABBCCCCC => ABC)
var uniqueInOrder = function (iterable) {
    let arr = [];
    let x = iterable;

    for (let i = 0; i < x.length; i++) {
        if (x[i] !== x[i + 1]) {
            arr.push(x[i]);
        }
    }

    return arr;
}

//extract domain from url
function domainName(url) {
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');

    return url.split('.')[0];
};

//remove first and last char
function removeChar(str) {
    let s = str.split("");

    if (s.length > 2) {
        s.pop();
        s.shift();
    } else {
        return '';
    }
    return s.join().replace(/,/g, "");

};

//arithmetic
function arithmetic(a, b, operator) {
    let res;
    switch (operator) {
        case 'add': res = a + b; break
        case 'subtract': res = a - b; break
        case 'multiply': res = a * b; break
        case 'divide': res = a / b; break
    }
    return res;
}

//first non consecutive
function firstNonConsecutive(arr) {

    let prev = arr[0];

    let n;
    for (let i = 1; i < arr.length; i++) {

        if ((prev + 1) !== arr[i]) {

            n = arr[i];
            break;
        }
        prev++;
    }

    return n !== undefined ? n : null;
}