var add = function(alpha, beta) {
    return parseInt(alpha) + parseInt(beta);
}
var subtract = function(alpha, beta) {
    return alpha - beta;
}
var multiply = function(alpha, beta) {
    return alpha * beta;
}
var divide = function(alpha, beta) {
    return alpha / beta;
}

module.exports = {
    add: add,
    sub: subtract,
    mult: multiply,
    div: divide
};