// make deadfish swim
function parse(data) {
    let value = 0;
    let res = [];
    let arr = data.split('');

    arr.forEach(e => {
        if (e === 'i') {
            value++;
        } else if (e === 'd') {
            value--;
        } else if (e === 's') {
            value = value * value;
        } else if (e === 'o') {
            res.push(value);
        }
    })

    return res;
}

//find unique number
function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}

// number of trailing zeros of N
function zeros(n) {
    var result = 0;
    while (n = Math.floor(n / 5)) result += n;
    return result;
}

//V A P O R C O D E string
function vaporcode(string) {
    let res = [];
    let s;
    let str = string.replace(/\s+/g, '');
    let arr = str.toUpperCase().split('');

    arr.forEach(e => {
        s = `${e}  `;
        res.push(s);
    })
    return res.join().replace(/,/g, "").trim();
}

// reverse letter
function reverseLetter(str) {
    const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'w', 'y', 'z'];

    let s = str.toLowerCase().split('');
    let res = [];

    s.forEach(e => {
        if (abc.includes(e)) {
            res.push(e);
        }
    })

    return res.reverse().join().replace(/,/g, "");

}

