var Crypto = function(sentence) {
    sentence = sentence.replace(/\s/g, '') // no spaces
    sentence = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'') // no puctuation

    console.log('sentence='+sentence)
    this.sentence = sentence
}

Crypto.prototype.normalizePlaintext = function() {
    return this.sentence
};

Crypto.prototype.plaintextSegments = function() {
};

Crypto.prototype.ciphertext = function() {
};

Crypto.prototype.size = function() {
};

module.exports = Crypto;
