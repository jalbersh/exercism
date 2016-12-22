function Acronym() {
}

export function parse(phrase) {
    let words = phrase.split(' ')
    let acronym = ''
    for (let i=0; i<words.length; i++) {
        let word = words[i]
        let punctWords = word.split(':')  /* should be regex for punctuations */
        let capWords = word.split(/(?=[A-Z])/)
        let hyphWords = word.split('-')
        if (hyphWords.length > 1) {
            for (let j=0; j<hyphWords.length; j++) {
                acronym += hyphWords[j].charAt(0).toUpperCase()
            }
        } else if (punctWords.length > 1) {
            for (let j=0; j<punctWords.length; j++) {
                acronym += punctWords[j].charAt(0).toUpperCase()
            }
        } else if (capWords.length > 1) {
            for (let k = 0; k < capWords.length; k++) {
                let letter = capWords[k].charAt(0)
                acronym += letter.toUpperCase()
            }
        }
        else {
            acronym += word.charAt(0).toUpperCase()
        }
    }
    return acronym
}

export default {
    Acronym
}
