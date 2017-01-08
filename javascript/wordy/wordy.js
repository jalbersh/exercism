var WordProblem = function (sentence) {
    this.operators = ['plus',
        'minus',
        'multiplied',
        'divided']
    const regex = new RegExp(/(plus|minus|divided by|multiplied by)+/g);
    //console.log('sentence='+sentence)
    this.sentence = sentence
    this.words = this.sentence.split(" ")
    //console.log('words='+this.words)
    if (!sentence.match(regex)) {
        console.log('we have an error')
	    throw new ArgumentError()
	}
};

WordProblem.prototype.answer = function() {
    var result = Number(0)
    var phrases = this.createPhrases()
    //console.log('got '+phrases.length+' phrases')
    for (var i=0;i<phrases.length;i++) {
        var phrase = phrases[i]
        //console.log('phrase['+i+']='+phrase.toString())
        if (i>0) {
            //console.log('result='+result)
            phrase.val2 = phrase.val1
            phrase.val1 = result.toString()
            //console.log('new phrase='+phrase.toString())
        }
        result = this.evaluate(phrase)
        //console.log('new result='+result)
    }
    return Number(result)
}

WordProblem.prototype.createPhrases = function() {
    //console.log('in createPhrases')
    var phrases = []
    var phrase = new Phrase(0,0,-1)
    for (var i=0;i<this.words.length;i++) {
        var word = this.words[i]
        //console.log('word='+word)
        if (this.operators.indexOf(word) != -1) {
            //console.log(word+' is an operator')
            phrase.operator=this.operators.indexOf(word)
            //console.log('operator='+phrase.operator)
        } else {
            var letters = word.toUpperCase().split(/(?=[0-9])/)
            //console.log('letters='+letters)
            var number = ''
            var negative=false
            for (var j=0;j<letters.length;j++) {
                var letter = letters[j]
                letter = letter.replace('?','');
                //console.log('letter='+letter)
                if (letter == '-') {
                    negative=true
                }
                var isNumber =  /^\d+$/.test(letter)
                if (isNumber) {
                    number += letter
                } else {
                    //console.log(letter+' is not a number')
                }
            }
            if (!phrase.val1 && number.length>0) {
               if (negative) {
                  //console.log('setting 1st val=-'+number)
                  phrase.val1 = -Number(number)
               } else {
                  //console.log('setting 1st val='+number)
                  phrase.val1 = Number(number)
               }
            } else {
                if (!phrase.val2 && number.length>0) {
                    if (negative) {
                        //console.log('setting 2nd val=-'+number)
                        phrase.val2 = -Number(number)
                    } else {
                        //console.log('setting 2nd val='+number)
                        phrase.val2 = Number(number)
                    }
                }
            }
        }
        if (phrase.isFull()) {
            //console.log('pushing '+phrase.toString())
            phrases.push(phrase)
            phrase = new Phrase(0,0,-1)
        }
    }
    //console.log('end phrase='+phrase.toString())
    if (!this.contains(phrases,phrase)) {
        //console.log('pushing new phrase='+phrase.toString())
        phrases.push(phrase)
    }
    return phrases
}

WordProblem.prototype.evaluate = function(p) {
   //console.log('evaluate operator='+p.operator)
   switch(p.operator) {
       case 0: return Number(p.val1)+Number(p.val2)
       case 1: return Number(p.val1)-Number(p.val2)
       case 2: return Number(p.val1)*Number(p.val2)
       case 3: return Number(p.val1)/Number(p.val2)
       default: return Number(p.val1)
   }
}

WordProblem.prototype.contains = function(ps,p) {
    var found = false
    for (var i=0;i<ps.length;i++) {
        var p1 = ps[i]
        //console.log('got phrase='+p1.toString()+' comparing to '+p.toString())
        if (p1 == p) {
           found = true;
        }
    }
    //console.log('contains returning '+found)
    return found
}

var Phrase = function(val1, val2, operator) {
    this.val1 = val1
    this.val2 = val2
    this.operator = operator
}

Phrase.prototype.toString = function() {
    return this.val1 + " " + this.operator + " " + this.val2
}

Phrase.prototype.isFull = function() {
    return (this.val1 != 0 && this.val2 != 0 && this.operator != -1)
}

var ArgumentError = function() {
    this.name="ArgumentError"
    this.message="ArgumentError"
}

module.exports = {
    WordProblem: WordProblem,
    ArgumentError: ArgumentError,
}
