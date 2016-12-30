var Crypto = function(sentence) {
    sentence = sentence.replace(/\s/g, '') // no spaces
    sentence = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'') // no puctuation
    sentence = sentence.toLowerCase()
    //console.log('sentence='+sentence+' with length='+sentence.length)
    this.sentence = sentence
}

Crypto.prototype.normalizePlaintext = function() {
    return this.sentence
};

Crypto.prototype.plaintextSegments = function() {
    var len = this.size();
    //console.log('size='+this.size())
    var list = [];
    for (var i=0;i<this.sentence.length;i++) {
        if (i > 0 && i % len == 0) {
            var word = this.sentence.substring(i-len,i)
            list.push(word)
        } else if (i == this.sentence.length-1) {
            var lastWord = list[list.length-1]
            var word = ''
            if (this.sentence.charAt(i-len+1) != lastWord.charAt(lastWord.length-1)) {
                word = this.sentence.substring(i - len + 1, i + 1)
            } else {
                word = this.sentence.substring(i - len + 2, i + 1)
            }
            list.push(word)
        }
    }
    return list
};

Crypto.prototype.ciphertext = function() {
    var text='';
    var list = this.plaintextSegments();
    for (var j=0;j<this.size();j++) {
        for (var i = 0; i < list.length; i++) {
            var word = list[i];
            //console.log('word='+word)
            if (word[j]) {
                text += word[j]
            }
        }
    }
    //console.log('returning '+text)
    return text
};

Crypto.prototype.size = function() {
    var len = this.sentence.length
    return Math.ceil(Math.sqrt(len))
};

module.exports = Crypto;
