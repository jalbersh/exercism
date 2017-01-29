var Converter = function () {
}

    Converter.prototype.convert = function (digits,origBase,targetBase) {
        if (origBase == undefined || !Number.isInteger(origBase) || origBase < 2) {
            throw new Error('Wrong input base')
        }
        if (targetBase == undefined || !Number.isInteger(targetBase) || targetBase < 2) {
            throw new Error('Wrong output base')
        }
        if (digits == undefined || digits.length==0) {
            throw new Error('Input has wrong format')
        }
        var decimal = 0;
        for (var i=digits.length-1; i>=0; i--) {
            var sdigit = digits[i];
            var digit = 0
            try {
                digit = parseInt(sdigit)
            } catch (e) {
                digit = 0
            }
            if ((digit == 0 && i==0 && digits.length>1) || digit < 0 || digit > origBase-1) {
                throw new Error('Input has wrong format')
            }
            if (digit < origBase) {
                decimal += digit * (Math.pow(origBase,(digits.length-1-i)))
            } else {
                return 0
            }
        }
        console.log('got decimal='+decimal+' from '+digits+' in base='+origBase)
        return this.convertFromDecimal(decimal,targetBase)
    }

    Converter.prototype.convertFromDecimal = function(decimal,targetBase) {
        console.log('in convertFromDecimal with '+decimal+' and targetBase='+targetBase)
        var obaseNum = decimal.toString(targetBase)
        console.log('obaseNum='+obaseNum)
        var sdigits = obaseNum.split('')
        console.log('sdigits='+sdigits)
        var digits = []
        sdigits.forEach(function (sdigit) {
            var digit = parseInt(sdigit,targetBase)
            console.log('digit='+digit)
            digits.push(digit)
        })
        return digits
    }

module.exports = Converter;