var Squares = function (num) {
    this.num = num
    this.squareOfSums = this.squareOfSums();
    this.sumOfSquares = this.sumOfSquares();
    this.difference = this.squareOfSums - this.sumOfSquares;
};

Squares.prototype.squareOfSums = function() {
    var sum = 0;
    for (var i=1;i<=this.num;i++) {
        sum += i
    }
    return Math.pow(sum,2);
};

Squares.prototype.sumOfSquares = function() {
    var sum = 1;
    for (var i=2;i<=this.num;i++) {
        sum += Math.pow(i,2);
    }
    return sum;
}

module.exports = Squares;