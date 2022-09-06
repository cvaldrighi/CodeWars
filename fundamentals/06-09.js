// duplicate encoder
function duplicateEncode(word) {
    let w = word.toLowerCase();
    let res = [];

    for (var i = 0; i < w.length; i++) {
        if (w.lastIndexOf(w[i]) === w.indexOf(w[i])) {
            res.push('(');
        } else {
            res.push(')');
        }
    };

    return res.join().replace(/,/g, "");

}

// bouncing balls
function bouncingBall(h, bounce, window) {
    if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
        h = h * bounce;
        let count = 1;
        while (h > window) {
            count += 2
            h = h * bounce;
        }
        return count;
    } else {
        return -1;
    }
}

//delete occurrences of an element if it occurs more than n times
function deleteNth(arr, n) {
    const res = [];
    const count = {};

    for (const el of arr) {
        if (count[el]) {
            count[el] = count[el] + 1;
        } else {
            count[el] = 1;
        }

        if (count[el] <= n) {
            res.push(el);
        }
    };

    return res;
}

// Sum Array
function sum(numbers) {
    let count = 0;
    if (numbers.length === 0) {
        return 0
    };

    for (let n of numbers) {
        count += n;
    }

    return count;
};

//descending order;
function descendingOrder(n) {
    var n = n.toString().split('');
    var res = Number(n.sort((a, b) => b - a).join(''));

    return res;
}

// function descendingOrder(n) {
//     if (n > 0) {
//         let arr = Array.from(String(n), Number);
//         let res = arr.sort(function (a, b) { return b - a });
//         return res.join().replace(/,/g, "");
//     }
// };

// categorize new member
function openOrSenior(data) {
    let res = [];

    for (let p of data) {
        if (p[0] >= 55 && p[1] > 7) {
            res.push("Senior");
        } else {
            res.push("Open");
        }
    }

    return res;
}

// build a pile of cubes
function findNb(m) {
    let count = 0;

    while (m > 0) {
        count++;
        let cubes = Math.pow(count, 3);
        m = m - cubes;
    }

    if (m < 0) {
        return -1;
    }

    return count;
}

// you only need one
function check(a, x) {
    if (a.includes(x)) {
        return true;
    } else {
        return false;
    }
}

// counting sheeps
function countSheeps(arrayOfSheep) {
    let count = 0;
    arrayOfSheep.forEach(e => {
        if (e === true) {
            count++;
        }
    })
    return count
}

// playing with digits
function digPow(n, p) {
    let dig = n.toString();
    let res = 0;

    for (let i = 0; i < dig.length; i++) {
        res = res + Math.pow(dig[i], p);
        p++;
    }

    if (res % n === 0) {
        return res / n;
    } else {
        return -1;
    }
}

//the highest profit wins
function minMax(arr) {
    let res = [];
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    res.push(min, max);

    return res;
}

// transportation on vacation
function rentalCarCost(d) {
    let price = 40;
    let total = price * d;

    if (d >= 3 && d < 7) {
        total -= 20;
    }
    if (d >= 7) {
        total -= 50;
    }

    return total;
}

// total amount of points
function points(games) {
    let points = 0;
    for (var i = 0; i < games.length; i++) {
        let p = games[i].split(":");
        if (p[0] > p[1]) {
            points += 3;
        } else if (p[0] == p[1]) {
            points += 1;
        } else {
            points += 0;
        }
    }
    return points;
}

// training on break camel case
function solution(string) {
    let str = [];
    let arr = string.split('');

    arr.forEach(e => {
        if (e === e.toUpperCase()) {
            let x = ` ${e}`
            str.push(x);
        } else {
            str.push(e);
        }
    })

    return str.join().replace(/,/g, "");
}

// are you playing banjo?
function areYouPlayingBanjo(name) {
    if (name.charAt(0) === 'R' || name.charAt(0) === 'r') {
        return `${name} plays banjo`;
    } else {
        return `${name} does not play banjo`;
    }
}

// str to number
const stringToNumber = function (str) {
    return Number(str);
}

