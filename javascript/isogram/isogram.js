//Determine if a word or phrase is an isogram.
//
//An isogram (also known as a "nonpattern word") is a word or
//phrase without a repeating letter.
//
//Examples of isograms:
//
//- lumberjacks
//- background
//- downstream

var Isogram = function(word) {
    this.word = word
}

Isogram.prototype.isIsogram = function() {
    this.word = this.word.toLowerCase();
    this.word = this.word.replace(/[\-\s]/g, '')
    letters = this.word.split('');
    for (var i = 0; i < letters.length - 1; i++) {
        for (var j = i + 1; j < letters.length; j++) {
            if (letters[i] === letters[j]) {
                return false;
            }
        }
    }
    return true;
};

module.exports = Isogram;