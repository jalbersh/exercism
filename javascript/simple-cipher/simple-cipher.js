
    var Cipher = function(key) {
        if( key !== undefined && !key.match(/^[a-z]+$/) )
            throw Error("Bad key");
        this.key = key || "aaaaaaaaaa";
    }

    var aValue = "a".charCodeAt(0);

    Cipher.prototype.encode = function(plainText) {
        console.log('in encode with '+plainText+';aValue='+aValue)
        var output = ''
        var letters = plainText.toLowerCase().split(/(?=[a-z])/)
        for (var i=0;i<letters.length;i++) {
            var letter = letters[i]
            var code = letter.charCodeAt(0)
            // shift is code for key minus code for a
            var keyLetter = this.key[i]
            var keyCode = keyLetter.charCodeAt(0)
            var shift = keyCode - aValue
            console.log('encode shift='+shift)
            var newCode = code+shift
            console.log('encode newCode='+newCode)
            var newLetter = String.fromCharCode(newCode)
            console.log('encode newLetter='+newLetter)
            output += newLetter;
        }
        console.log('encode output='+output)
        return output
    };

    Cipher.prototype.decode = function(cipherText) {
        console.log('in decode with '+cipherText+';aValue='+aValue)
        var output = ''
        var letters = cipherText.toLowerCase().split(/(?=[a-z])/)
        for (var i=0;i<letters.length;i++) {
            var letter = letters[i]
            var code = letter.charCodeAt(0)
            // shift is code for key minus code for a
            var keyLetter = this.key[i]
            var keyCode = keyLetter.charCodeAt(0)
            var shift = aValue - keyCode
            console.log('decode shift='+shift)
            var newCode = code+shift
            console.log('decode newCode='+newCode)
            var newLetter = String.fromCharCode(newCode)
            console.log('decode newLetter='+newLetter)
            output += newLetter;
        }
        console.log('decode output='+output)
        return output

    };

module.exports = Cipher;

// 'qayaa{gacia' to equal 'qayaeaagaciai