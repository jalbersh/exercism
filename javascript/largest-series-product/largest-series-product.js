var Series = function (num) {
    this.number = num
}

Series.prototype.largestProduct = function(numDigits) {
    //console.log('number='+this.number)
    if (numDigits==0) return 1
    var digits = []
    if (this.number.length > 0) {
        digits = this.number.split(/(?=[0-9])/)
    }
    if (numDigits > digits.length) throw new Error('Slice size is too big.')
    if (numDigits < 0) throw new Error('Invalid input.')
    if (!this.allNumbers(digits)) throw new Error('Invalid input.')
    if (this.allZeroes(digits)) return 0
    var product = 0
    //console.log('digits='+digits)
    var count = 0;
    for (var i=0;i<digits.length;i++) {
        var newProduct = this.getProduct(digits,i,numDigits)
        if (newProduct === NaN) return 0
        if (newProduct > product) {
            product = newProduct
        }
    }
    return product
}

Series.prototype.getProduct = function(digits,index,num) {
    var prod = 1;
    //console.log('in getProduct with digits='+digits+';index='+index+';num='+num)
    var count=0
    for (var i=index;count<num&&i<digits.length;i++) {
        var digit = Number(digits[i]);
        //console.log('digit='+digit)
        count++
        prod *= digit
    }
    if (count != num) {
        return 0
    }
    //console.log('prod='+prod)
    return prod
}

Series.prototype.allZeroes = function(digits) {
    for (var i=0;i<digits.length;i++) {
        var digit = Number(digits[i])
        if (digit > 0) {
            return false
        }
    }
    return true
}

Series.prototype.allNumbers = function(digits) {
    for (var i=0;i<digits.length;i++) {
        var digit = digits[i]
        if (isNaN(digit)) return false
    }
    return true
}

module.exports = Series
