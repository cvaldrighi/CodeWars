// invite more women
function inviteMoreWomen(L) {
    let m = 0;
    let f = 0;

    L.forEach(e => {
        if (e === 1) {
            m++
        } else if (e === -1) {
            f++
        }
    })

    if (f >= m) {
        return false;
    } else {
        return true;
    }


}

// count photos
function countPhotos(road) {
    let cam = 0;
    let right = 0;
    let total = 0

    for (let i = 0; i < road.length; i++) {
        if (road[i] == ".") {
            cam++;
            total += right;
        }

        if (road[i] == "<") {
            total += cam;
        }

        if (road[i] == ">") {
            right++;
        }
    }

    return total;
}

// sort by last char
function last(x) {
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
}

// convert string to camelcase
function toCamelCase(str) {
    let s = "";
    if (str) {
        let arr = str.split(/[-_]/g);

        for (let i in arr) {
            if (i > 0) {
                s += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
            } else {
                s += arr[i]
            }
        }
    } else {
        return s
    }
    return s;
}

// find the stray number
function stray(numbers) {
    let res;

    for (var i = 0; i < numbers.length; i++) {
        if (numbers.lastIndexOf(numbers[i]) === numbers.indexOf(numbers[i])) {
            res = numbers[i];
        }
    };

    return res;
}

// removing elements
function removeEveryOther(arr) {
    return arr.filter((v, i) => i % 2 === 0);
}