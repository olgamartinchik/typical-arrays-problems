exports.min = function min(array) {
    let result
    if (typeof array !== 'object' || array.length == 0) {
        return 0;
    } else if (array) {
        result = Math.min.apply(Math, array);
    }
    return result;
}


exports.max = function max(array) {
    let result
    if (typeof array !== 'object' || array.length == 0) {
        return 0;
    } else if (array) {
        result = Math.max.apply(Math, array);
    }
    return result;
}
exports.avg = function avg(array) {
    let result
    if (typeof array !== 'object' || array.length == 0) {
        return 0;
    } else {

        let sum = array.reduce((a, b) => (a + b), 0);
        result = sum / array.length;
    }

    return result;
}
