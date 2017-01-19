var ONES = ['','one','two','three','four','five','six'
  ,'seven','eight','nine','ten','eleven','twelve'
  ,'thirteen','fourteen','fifteen','sixteen','seventeen'
  ,'eighteen','nineteen'];
var TENS = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
var OTHER = ['','hundred','thousand','million','billion'];


var Say = function() {
}

Say.prototype.inEnglish = function(number) {
    console.log('in inEnglish with '+number)
    if (number == 0) return 'zero'
    var digits = number.toString()
    if (number<20) return ONES[number]
    if (number<100) {
        return this.tens(number)
    }
    if (number<1000) {
        return this.hundreds(number)
    }
    if (number<1000000) {
        return this.thousands(number)
    }
    if (number>=1000000) {
        return this.millions(number)
    }
}

Say.prototype.tens = function(number) {
        console.log('in tens with '+number)
        var rem = number % 10
        console.log('rem='+rem)
        var div = Math.floor(number/10)
        console.log('div='+div)
        if (rem == 0) {
            return TENS[div]
        } else {
            return TENS[div]+'-'+ONES[rem]
        }
}

Say.prototype.hundreds = function(number) {
        console.log('in hundreds with '+number)
        var rem = number % 100
        console.log('rem='+rem)
        var div = Math.floor(number/100)
        console.log('div='+div)
        var tens = this.tens(number-div*100)
        if (tens) tens = ' '+tens
        return ONES[div]+' hundred'+tens
}

Say.prototype.thousands = function(number) {
        console.log('in thousands with '+number)
        var rem = number % 1000
        console.log('rem='+rem)
        var div = Math.floor(number/1000)
        console.log('div='+div)
        if (rem > 0) {
            var hundreds = this.hundreds(number-div*1000)
            if (hundreds) hundreds = ' '+hundreds
            var tens = this.tens(number-div*1000)
            if (tens) tens = ' '+tens
            return ONES[div]+' thousand'+hundreds
        }
        return ONES[div]+' thousand'
}

Say.prototype.millions = function(number) {
        console.log('in millions with '+number)
        var rem = number % 1000000
        console.log('rem='+rem)
        var div = Math.floor(number/1000000)
        console.log('div='+div)
        if (rem > 0) {
            var thousands = this.thousands(number-div*1000000)
            var hundreds = this.hundreds(number-div*1000000)
            if (hundreds) hundreds = ' '+hundreds
            var tens = this.tens(number-div*1000000)
            if (tens) tens = ' '+tens
            return ONES[div]+' thousand'+hundreds
        }
        return ONES[div]+' million'
}

module.exports = new Say()