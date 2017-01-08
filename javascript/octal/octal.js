var Octal = function (num) {
    var number='';
    number = num;

    Octal.prototype.toDecimal = function () {
        if (number.match(/(?=[a-zA-Z])/)) {
            return 0;
        }
        var digits = number.split(/(?=[0-7])/)
        var decimal = 0;
        for (var i=digits.length-1; i>=0; i--) {
            var sdigit = digits[i];
            var digit = 0;
            try {
                digit = parseInt(sdigit);
            } catch (e) {
                digit = 0;
            }
            if (digit < 8) {
                decimal += digit * (Math.pow(8,(digits.length-1-i)));
            } else {
                return 0;
            }
        }
        return decimal;
    }
};


module.exports = Octal;