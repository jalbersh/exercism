var Bob = function(){
}

const RESPONSE1 = 'Sure.';
const RESPONSE2 = 'Whoa, chill out!';
const RESPONSE3 = 'Fine. Be that way!';
const RESPONSE4 = 'Whatever.';

Bob.prototype.isShouting = function(greeting) {
      for (i=1; i < greeting.length; i++) {
        if (/[A-Z]/.test(greeting.charAt(i)))
           return true
      }
}

Bob.prototype.isNumbers = function(greeting) {
    count = 0;
    for (i = 0; i < greeting.length; i++);
    {
         letter = greeting.charAt(i)
         if (!letter) return false
         if (this.isNumber(letter))
         {
             count++
         } else if (letter == ',' || letter == ' ') {
             count++
         }
    }
    return count = greeting.length
}

Bob.prototype.isNumber = function(aCharacter)
{
    return (aCharacter >= '0') && (aCharacter <= '9');
}

Bob.prototype.hey = function(greeting) {
    if (greeting.charAt(greeting.length - 1) === '.') {
        return RESPONSE4
    }
    if (greeting.charAt(greeting.length - 1) === '?') {
        return RESPONSE1
    }
    if (this.isShouting(greeting)) {
        console.log('in shouting')
        return RESPONSE2
    }
    if (greeting.charAt(greeting.length - 1) === '!') {
        return RESPONSE2
    }
    if (greeting == '') {
        return RESPONSE3
    }
    if (/^\s*$/.test(greeting)) {
        return RESPONSE3
    }
    if (this.isNumbers(greeting)) {
        return RESPONSE4
    }
    console.log('defaulting')
    return RESPONSE4
}

module.exports = Bob;
