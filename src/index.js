exports.min = function min(array) {
    return arguments.length < 1 || array.length < 1 ? 0 : Math.min(...array);
};

exports.max = function max(array) {
    return arguments.length < 1 || array.length < 1 ? 0 : Math.max(...array);
};

exports.avg = function avg(array) {
    const reducer = (acc, it) => acc + it;

    return arguments.length < 1 || array.length < 1
        ? 0
        : array.reduce(reducer, 0) / array.length;
};
