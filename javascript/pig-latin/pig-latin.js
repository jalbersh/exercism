function translate(phrase) {
    var newPhrase = ''
    phrase = phrase.toLowerCase()
    var words = phrase.split(' ')
    for (var i=0;i<words.length;i++) {
        var word = words[i]
        var x = word.charAt(0)
        if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
            newPhrase = word + 'ay';
        } else {
            var part = '';
            var start = word.substring(0,2)
            if (start == 'ch' || (start == 'th' && word.charAt(2) != 'r') || start == 'qu') {
                x = word.substring(0,2);
                part = word.substring(2,word.length)
            }
            else
            {
                start = word.substring(1,3)
                if (start == 'qu' || start == 'ch' || start == 'hr') {
                    x = word.substring(0,3)
                    part = word.substring(3,word.length)
                }
                else {
                    part = word.substring(1,word.length)
                }
            }
            newPhrase += part + x + 'ay';
        }
        if (words.length > 1 && i < words.length-1) {
            newPhrase += ' '
        }
    }
    return newPhrase;
};

module.exports = {
    translate: translate
}
