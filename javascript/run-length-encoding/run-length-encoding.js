function encode(string) {
    var output='';
    var letters = string.split('');
    var ctr=0;
    var lastLetter = ''
    var count=1
    letters.forEach(function (letter) {
        if (letter !== lastLetter) {
            lastLetter = letter
            count=1
            for (var i=ctr+1;i<letters.length;i++) {
                if (letters[i]==letter) count++
                else break;
            }
            if (count > 1) {
                output += count.toString()+letter
            } else {
                output += letter
            }
        }
        ctr++
    })
    return output
}

function decode(string) {
    //console.log('in decode with '+string)
    var output = ''
    var letters=string.split('')
    var digit=1
    var sdigit = ''
    letters.forEach(function(letter) {
        //console.log('letter='+letter)
        var digit1 = parseInt(letter)
        if (!isNaN(digit1)) {
            //console.log(letter+' is a number')
            sdigit += letter
        } else {
            if (sdigit == '') sdigit = '1'
            //console.log('sdigit='+sdigit)
            //console.log('letter='+letter)
            digit = parseInt(sdigit)
            sdigit = ''
            for (var i=0;i<digit;i++) {
                output += letter
            }
        }
    })
    return output
}

module.exports = {
                    encode: encode,
                    decode: decode
                 };