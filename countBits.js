var countBits = function (n) {
    let x = (n).toString(2);
    x.toString();
    const total = (x.match(/1/g) || []).length;
    return total;
};