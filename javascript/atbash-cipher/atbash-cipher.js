// The Atbash cipher is a simple substitution cipher that relies on
// transposing all the letters in the alphabet such that the resulting
// alphabet is backwards. The first letter is replaced with the last
// letter, the second with the second-last, and so on.
//
// An Atbash cipher for the Latin alphabet would be as follows:
//
// Plain:  abcdefghijklmnopqrstuvwxyz
//       : zyxwvutsrqponmlkjihgfedcba
// Ciphertext is written out in groups of fixed length, the traditional group size
// being 5 letters, and punctuation is excluded. This is to make it harder to guess
// things based on word boundaries.

function encode(sentence) {
     var encode=''
     var words = sentence.split(',')
     var ctr=0;
     for (var j=0;j<words.length;j++) {
         var word = words[j]
         word = word.replace(/\s/g, '') // no spaces
         word = word.replace('.', '') // no puctuation
         var letters = word.split('')
         for (var i=0;i<letters.length;i++) {
             var letter = letters[i].toLowerCase() // lowercase
             if (letter != ' ') {
                 var score = forward_score(letter)
                 if (score != -1) {
                     var bletter = backwards_score(score)
                     encode += bletter
                     ctr++
                 } else {
                     encode += letter
                     ctr++
                 }
                 if (ctr == 5) { // group size is 5
                     ctr = 0;
                     encode += ' '
                 }
             }
         }
     }
     if (encode[encode.length-1] == ' ') {
         encode = encode.substring(0,encode.length-1);
     }
     //console.log(sentence+' encoded is <'+encode+'>')
     return encode
};

function forward_score(letter) {
     var forwards='abcdefghijklmnopqrstuvwxyz'
     for (var i=0;i<forwards.length;i++) {
         if (forwards[i] == letter) {
             return i;
         }
     }
     return -1; // bad latter
}

function backwards_score(score) {
     var backwards='zyxwvutsrqponmlkjihgfedcba'
     return backwards[score];
}
 
module.exports = {
    encode: encode
};
