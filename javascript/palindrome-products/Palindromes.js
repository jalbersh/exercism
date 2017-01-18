
var Palindromes = function (factorList) {
    this.maxFactor = factorList.maxFactor
    this.minFactor = factorList.minFactor ? factorList.minFactor : 1
    this.factors = []
}

Palindromes.prototype.largest = function() {
    var largest = {value:this.maxFactor,factors:[]}
    this.factors.forEach
    return largest
}

Palindromes.prototype.calculate = function(num) {
    var factors = []
    var min = 0;
    if (this.minFactor == 1) {
        factors.push([1,num])
        min = 2
    } else {
        min = this.minFactor
    }
    var half = Math.floor(num/2)
    for (var i=min;i<half;i++) {
        var rem = num % i
        if (rem == 0) {
            var div = num / i
            factors.push([i,div])
        }
    }
    return factors
}

Paalindrome.prorotype.isPalindrome(num) {
    var palin = num.toString();
    if (palin.length == 1) return true
    return (palin == palin.reverse())
}

Palindromes.prototype.generate = function() {
    for (var i=this.minFactor;i<=this.maxFactor;i++) {

    }
    this.factors = calculate(this.maxFactor)
}

Palindromes.prototype.smallest = function() {

}

module.exports = Palindromes