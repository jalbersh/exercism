//I=1, V=5, X=10, L=50, C=100, D=500, M=1000
// rules: 7 = VII, 8=VIII, 9 = IX
//        70 = LXX, 80=LXXX , 90= XC
//        700 = DCC, 800 = DCCC, 900=CM
//  4, 5, 6
//  40, 50, 60
//  400, 500, 600

function toRoman(number) {
    var roman = '';
    var div = 0;
    var power = 0;
    var rem = 0;
    for (var i=0; i<5; i++) {
        power = i;
        div = Math.floor(number/(Math.pow(10,i)))
        rem = number % (Math.pow(10,i))
        var roman1 = ''
        if (div > -1 && div < 10) {
            var roman = singles(div, power);
            if (rem > 0) {
                if (rem < 10) {
                    return roman + singles(rem, 0)
                } else {
                    var div1 = 0;
                    var power1 = 0;
                    var rem1 = 0;
                    for (var j=0; j<5; j++) {
                        power1 = j;
                        div1 = Math.floor(rem / (Math.pow(10, j)))
                        rem1 = rem % (Math.pow(10, j))
                        if (div1 > -1 && div1 < 10) {
                            var roman1 = singles(div1, power1);
                            if (rem1 > 0) {
                                if (rem1 < 10) {
                                    return roman + roman1 + singles(rem1,0)
                                }
                            } else {
                                return roman + roman1
                            }
                        }
                    }
                }
            } else {
                return roman
            }
        }
    }
};

function singles(digit, power) {
    switch(digit) {
        case 1:
            if (power == 0) {
                return 'I'
            }
            if (power == 1) {
                return 'X'
            }
            if (power == 2) {
                return 'C'
            }
            if (power == 3) {
                return 'M'
            }
        case 2:
            if (power == 0) {
                return 'II'
            }
            if (power == 1) {
                return 'XX'
            }
            if (power == 2) {
                return 'CC'
            }
            if (power == 3) {
                return 'MM'
            }
        case 3:
            if (power == 0) {
                return 'III'
            }
            if (power == 1) {
                return 'XXX'
            }
            if (power == 2) {
                return 'CCC'
            }
            if (power == 3) {
                return 'MMM'
            }
        case 4:
            if (power == 0) {
                return 'IV'
            }
            if (power == 1) {
                return 'XL'
            }
            if (power == 2) {
                return 'CD'
            }
        case 5:
            if (power == 0) {
                return 'V'
            }
            if (power == 1) {
                return 'L'
            }
            if (power == 2) {
                return 'D'
            }
        case 6:
            if (power == 0) {
                return 'VI'
            }
            if (power == 1) {
                return 'LX'
            }
            if (power == 2) {
                return 'DC'
            }
        case 7:
            if (power == 0) {
                return 'VII'
            }
            if (power == 1) {
                return 'LXX'
            }
            if (power == 2) {
                return 'DCC'
            }
        case 8:
            if (power == 0) {
                return 'VIII'
            }
            if (power == 1) {
                return 'LXXX'
            }
            if (power == 2) {
                return 'DCCC'
            }
        case 9:
            if (power == 0) {
                return 'IX'
            }
            if (power == 1) {
                return 'XC'
            }
            if (power == 2) {
                return 'CM'
            }
    }
}

module.exports = toRoman;