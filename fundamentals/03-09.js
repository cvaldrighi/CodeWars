// highest and lowest
function highAndLow(numbers) {
    const x = numbers.split(" ");
    const n = x.map(e => parseInt(e));
    const min = Math.min(...n);
    const max = Math.max(...n);

    return `${max} ${min}`;
}

// oppositers attract
function lovefunc(flower1, flower2) {
    let f1;
    let f2;

    if (flower1 % 2 === 0) {
        f1 = 'Even';
    } else {
        f1 = 'Odd';
    }

    if (flower2 % 2 === 0) {
        f2 = 'Even';
    } else {
        f2 = 'Odd';
    }

    if (f1 != f2) {
        return true;
    } else {
        return false;
    }
}

// array diff
function arrayDiff(a, b) {
    return a.filter(e => !b.includes(e));
}