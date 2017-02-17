var WIDTH=3
var HEIGHT=3
var DIGITS = [
        ' _ \n' +
        '| |\n' +
        '|_|\n' +
        '   ',
        '   \n' +
        '  |\n' +
        '  |\n' +
        '   ',
        ' _ \n' +
        ' _|\n' +
        '|_ \n' +
        '   ',
        ' _ \n' +
        ' _|\n' +
        ' _|\n' +
        '   ',
        '   \n' +
        '|_|\n' +
        '  |\n' +
        '   ',
        ' _ \n' +
        '|_ \n' +
        ' _|\n' +
        '   ',
        ' _ \n' +
        '|_ \n' +
        '|_|\n' +
        '   ',
        ' _ \n' +
        '  |\n' +
        '  |\n' +
        '   ',
        ' _ \n' +
        '|_|\n' +
        '|_|\n' +
        '   ',
        ' _ \n' +
        '|_|\n' +
        ' _|\n' +
        '   '
    ]

function findDigit(input) {
    for (var ctr=0;ctr<10;ctr++) {
        var digit = DIGITS[ctr]
        if (digit == input) {
            return ctr.toString()
        }
    }
    // remove extra newline
    var len = input.length
    input = input.substring(0,len-1)
    for (var ctr=0;ctr<10;ctr++) {
        var digit = DIGITS[ctr]
        if (digit == input) {
            return ctr.toString()
        }
    }
    return -1
}

function convert(input) {
    var digit = findDigit(input)
    if (digit != '-1') return digit
    var lines = input.split('\n')
    var digits = ''
    var sdigit = ['','','','','','','','','','']
    lines.forEach(function(line) {
        var found = false
        var len = line.length
        var width = Math.ceil(len/WIDTH)
        var ctr=0
        for (;ctr<width;ctr++) {
            var part1 = line.substring(ctr * WIDTH, WIDTH * (ctr + 1))
            sdigit[ctr] += part1 + '\n'
            var spart1 = findDigit(sdigit[ctr])
            if (spart1 != '-1') {
                found = true
                digits += spart1
            } else {
                digits += '?'
            }
        }
    })
    var i=0
    while (digits[i] == '?') {
        i++
    }
    digits = digits.substring(i)
    if (digits == '') return '?'
    return digits
}

module.exports = {convert: convert}