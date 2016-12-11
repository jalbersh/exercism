// given a phrase can count the occurrences
// of each word in that phrase.

var Words = function () {}

Words.prototype.count = function(input) {
    input = input.toLowerCase()
    input = input.replace(/[?¿.\/#¡!$%\^&\*;:{}=\-_`~()@]/g,"")
    input = input.replace(/\s+/g, ' ')
    input = input.replace(/,/g,' ')
    if (input[0] == ' ') {
        input = input.substring(1)
    }
    if (input[input.length-1] == ' ') {
        input = input.substring(0,input.length-1)
    }
    subStrings = input.split(' ');
    var counts = Object.create(null);
    subStrings.forEach(function(string) {
        if (typeof counts[string] === 'undefined') {
            counts[string] = 0;
        }
        counts[string]++;
    });
    return counts;
};

module.exports = Words;