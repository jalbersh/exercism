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
    console.log('in findDigit with [',input,']')
    for (var ctr=0;ctr<10;ctr++) {
        var digit = DIGITS[ctr]
        //console.log('input.length=',input.length+';digit.length=',digit.length)
        if (digit == input) {
            console.log('found digit=',ctr)
            return ctr.toString()
        }
    }
    // remove extra newline
    var len = input.length
    input = input.substring(0,len-1)
    //console.log('input.length=',input.length,'input=[',input,']')
    for (var ctr=0;ctr<10;ctr++) {
        var digit = DIGITS[ctr]
        if (digit == input) {
            console.log('found digit=',ctr)
            return ctr.toString()
        }
    }
    return -1
}

function convert(input) {
    var digit = findDigit(input)
    if (digit != '-1') return digit
    console.log('input',input)
    var lines = input.split('\n')
    var digits = ''
    var sdigit1 = ''
    var sdigit2 = ''
    lines.forEach(function(line) {
        var len = line.length
        var width = Math.ceil(len/WIDTH)
        console.log('line len=',len,';line=',line)
        var ctr=0
        //for (;ctr<width;ctr++) {
            var part1 = line.substring(ctr * WIDTH, WIDTH * (ctr + 1))
            //var part1 = line.substring(0,3)
            console.log('part1=',part1)
            sdigit1 += part1 + '\n'
            var spart1 = findDigit(sdigit1)
            if (spart1 != '-1') {
                digits += spart1
            } 
        //}
        ctr++
        var part2 = line.substring(ctr * WIDTH, WIDTH * (ctr + 1))
        //var part2 = line.substring(3,6)
        sdigit2 += part2+'\n'
        var spart2 = findDigit(sdigit2)
        if (spart2 != '-1') {
            digits += spart2
        }
    })
    if (digits == '') return '?'
    return digits
}

module.exports = {convert: convert}