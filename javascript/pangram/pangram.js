//Determine if a sentence is a pangram. A pangram
//"every letter") is a sentence using every letter of the
//alphabet at least once. The best known English pangram
//is "The quick brown fox jumps over the lazy dog."

var Pangram = function(sentence) {
    this.sentence = sentence
}

Pangram.prototype.alphabet = [..."abcdefghijklmnopqrstuvwxyz"];

Pangram.prototype.isPangram = function() {
    this.sentence = this.sentence.toLowerCase();
    this.sentence = this.sentence.replace(/[\-\s]/g, '')
    for (i=0;i<this.alphabet.length;i++)  {
        letter = this.alphabet[i];
        if (!this.sentence.includes(letter)) {
            return false;
        }
    }
    return true
};

module.exports = Pangram