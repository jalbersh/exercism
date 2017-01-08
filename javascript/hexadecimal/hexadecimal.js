var Hexadecimal = function(num) {
    var number='';
    number = num;
    //console.log('num='+num+';num len='+num.length)

    Hexadecimal.prototype.toDecimal = function () {
        number = number.toLowerCase()
        var digits = number.split(/(?=[0-9a-f])/)
        //console.log('digits='+digits)
        var decimal = 0;
        var len = digits.length
        //console.log('length='+len)
        for (var i=len-1; i>=0; i--) {
            var sdigit = digits[i];
            //console.log('sdigit='+sdigit)
            var digit = 0;
            try {
                if (!isNaN(sdigit)) {
                    digit = parseInt(sdigit);
                    //console.log('1digit='+digit)
                }
                else {
                    digit = this.parse(sdigit)
                }
            } catch (e) {
                //console.log('error')
                digit = this.parse(sdigit)
            }
            //console.log('2digit='+digit)
            if (digit < 10) {
                //console.log('i='+i)
                //console.log('len-1-i='+(len-1-i))
                var pow = 0;
                if (len-1-i == 0) {
                    pow = 1
                } else {
                    pow = (Math.pow(16,(len-1-i)))
                }
                //console.log('pow='+pow)
                decimal += digit * pow;
                //console.log('decimal='+decimal)
            } else if (digit > 9 && digit < 16) {
                //console.log('i='+i)
                //console.log('len-1-i='+(len-1-i))
                var pow = len-1-i
                if (pow == 0) {
                    pow = 1
                } else {
                    pow = Math.pow(16,pow)
                }
                decimal += digit*pow
            } else {
                return 0;
            }
        }
        return decimal;
    }

    Hexadecimal.prototype.parse = function(str) {
            //console.log('in parse')
            if (str=='a') return 10
            if (str=='b') return 11
            if (str=='c') return 12
            if (str=='d') return 13
            if (str=='e') return 14
            if (str=='f') return 15
    }

    Hexadecimal.prototype.clean = function(arr,which) {
        //console.log('in clean with '+arr+'; and '+which)
        if (which == 1) {
            for (var i=0;arr.length-1;i++) {
                var val = arr[i]
                //console.log('val='+val)
                if (val != undefined) {
                    arr[i] = val.replace(/[a-f]/g, '');
                    //console.log('arr['+i+']='+arr[i])
                }
            }
        } else {
            for (var i=0;arr.length-1;i++) {
                var val = arr[i]
                //console.log('val='+val)
                if (val != undefined) {
                    arr[i] = val.replace(/[0-9]/g, '');
                    //console.log('arr['+i+']='+arr[i])
                }
            }
        }
        return arr
    }
};

module.exports = Hexadecimal;
