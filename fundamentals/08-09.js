// count by x
function countBy(x, n) {

    let z = [];
    for (var i = 1; i <= n; i++) {
        z.push(x * i);
    };

    return z;
}

// vowel count
function getCount(str) {
    let arr = str.split("");
    let count = 0;
    arr.forEach(e => {
        if (e === 'a' || e === 'e' || e === 'i' || e === 'o' || e === 'u') {
            count++;
        }
    })
    return count;
}

// friend or foe;
function friend(friends) {
    let myFriends = [];
    friends.forEach(e => {
        if (e.length == 4) {
            myFriends.push(e);
        }
    })

    return myFriends;
}

// area or perimeter?
const areaOrPerimeter = function (l, w) {
    if (l === w) {
        return l * w;
    } else {
        return 2 * (l + w);
    }
};

// smallest int
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
}

// regex validate pin code
function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin);
}

// sum without highest and lowest number
function sumArray(array) {
    if (array != null && array.length > 2 && array != NaN) {

        let min = Math.min(...array);
        let max = Math.max(...array);
        let sum = 0;

        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }

        return sum - max - min;

    } else {
        return 0;
    }
}

// sum mixed array
function sumMix(x) {
    let sum = 0;
    const n = x.map(e => parseInt(e));

    for (var i = 0; i < n.length; i++) {
        sum += n[i];
    }

    return sum;
}

// tribonacci sequence
function tribonacci(s, n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push((i < 3) ? s[i] : arr[i - 1] + arr[i - 2] + arr[i - 3]);
    }
    return arr;
}

// opposite number
function opposite(number) {
    return number * (-1);
}

//count of positives/ sum of negatives
function countPositivesSumNegatives(input) {
    let count = 0;
    let sum = 0;
    let arr = [];

    if (input === null || input.length === 0) {
        return [];
    } else {
        for (var i = 0; i < input.length; i++) {

            if (input[i] <= 0) {
                sum += input[i];
            } else {
                count++;
            }

        }
        arr.push(count, sum);

        return arr;
    }
}

// volume of a cuboid
class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * width * height;
    }
}

// rot13 replace
const rot13 = (message) => {
    const abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"

    return message.replace(/[a-z]/gi, letter => cipher[abc.indexOf(letter)])
}

//take a ten minutes walk
function isValidWalk(walk) {
    var x = 0
    var y = 0

    for (var i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'n': y--; break
            case 's': y++; break
            case 'w': x--; break
            case 'e': x++; break
        }
    }

    return walk.length === 10 && x === 0 && y === 0;
}

// sum of numbers between min and max
function getSum(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    let result = 0;

    for (min; min <= max; min++) {
        result += min;
    }

    return result;
}

// mexican wave
function wave(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];

        if (letter === " ") {
            continue;
        } else {
            arr.push(str.slice(0, i) + letter.toUpperCase() + str.slice(i + 1))
        }
    }

    return arr;
}