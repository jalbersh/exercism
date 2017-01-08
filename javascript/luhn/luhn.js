var Luhn = function (num) {
  this.number = num;
  this.digits = String(num).split(/(?=[0-9])/).reverse()
  this.checkDigit = this.CheckDigit(this.digits);
  this.addends = this.Addends(this.digits);
  this.checksum = this.Checksum(this.digits);
  this.valid = (this.Checksum(this.digits) % 10 == 0);
};

Luhn.prototype.CheckDigit = function(digits) {
  return +digits[0];
};

Luhn.prototype.Addends = function(digits) {
	/* Doubles odd digits from the right
	Subtracts 9 if they are 10 or bigger */
    var newDigits = [];
    for (var i=digits.length-1;i>=0;i--) {
        var digit = parseInt(digits[i])
        if (i % 2 == 1) {
            var double = digit*2;
            if (double > 9) {
                double -= 9;
            }
            newDigits.push(double)
        } else {
            newDigits.push(digit)
        }
    }
    return newDigits
};

Luhn.prototype.Checksum = function(digits) {
    return this.Addends(digits).reduce(
        function(total, item) {
    		return total + item
        }, 0)
};

Luhn.create = function(code, check) {
  var digit=check || 0;
  var newCode = new Luhn(code + String(digit));
  return newCode.valid ? +newCode.number : Luhn.create(code, digit);
};

module.exports = Luhn;