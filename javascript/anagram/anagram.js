var Anagram = function(word) {
    this.word = word
}

Anagram.prototype.matches = function() {
    var list = []

    var listOfWords = Array.from(arguments);
    if (listOfWords.length == 1) {
        listOfWords = listOfWords.toString()
        if (listOfWords.indexOf(',') > -1) {
            listOfWords = listOfWords.split(',')
        }
    }
    if (typeof listOfWords === 'string') {
       ok = this.check(listOfWords)
       if (ok) {
           if (listOfWords.length == this.word.length) {
               list.push(listOfWords)
           }
       }
    } else {
        for (j = 0; j < listOfWords.length; j++) {
            possible = listOfWords[j]
            ok = this.check(possible)
            if (ok) {
               if (possible.length == this.word.length) {
                   list.push(possible)
               }
            }
        }
    }
    return list
};

Anagram.prototype.check = function(possible) {
        saved_word = this.word.toLowerCase()
        testWord = possible.toLowerCase()
        if (testWord.length != saved_word.length) {
            return false
        }
        if (testWord == saved_word) {
            return false
        }
        ok = true
        for (i = 0; i < testWord.length; i++) {
            letter = testWord[i];
            if (!saved_word.includes(letter)) {
                return false
            } else {
                // remove found letter from saved_word
                saved_word = saved_word.replace(letter,'')
            }
        }
        return true
}

module.exports = Anagram;