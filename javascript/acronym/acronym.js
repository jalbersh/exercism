'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parse = parse;
function Acronym() {}

function parse(phrase) {
    var words = phrase.split(' ');
    var acronym = '';
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var punctWords = word.split(':'); /* should be regex for punctuations */
        var capWords = word.split(/(?=[A-Z])/);
        var hyphWords = word.split('-');
        if (hyphWords.length > 1) {
            for (var j = 0; j < hyphWords.length; j++) {
                acronym += hyphWords[j].charAt(0).toUpperCase();
            }
        } else if (punctWords.length > 1) {
            for (var _j = 0; _j < punctWords.length; _j++) {
                acronym += punctWords[_j].charAt(0).toUpperCase();
            }
        } else if (capWords.length > 1) {
            for (var k = 0; k < capWords.length; k++) {
                var letter = capWords[k].charAt(0);
                acronym += letter.toUpperCase();
            }
        } else {
            acronym += word.charAt(0).toUpperCase();
        }
    }
    return acronym;
}

exports.default = {
    Acronym: Acronym
};

