const ACHAR=65

var Diamond = function() {
}

Diamond.prototype.makeDiamond = function(letter) {
  if (letter == 'A') {
    return 'A\n';
  }
  console.log('letter='+letter)
  var charCode = letter.charCodeAt(0)
  const rows = (charCode-ACHAR+1) * 2 - 1
  console.log('rows='+rows)
  const middleRow  = Math.floor(rows / 2)
  console.log('middleRow='+middleRow)
  var letters = []
  // add A through Letter ascending
  for (var i = 0; i <= middleRow; i++) {
    var newLetter = String.fromCharCode(i + ACHAR)
    letters.push(newLetter)
  }
  // add Letter - A descending
  for (var i = middleRow - 1; i >= 0; i--) {
    var newLetter = String.fromCharCode(i + ACHAR)
    letters.push(newLetter)
  }
  // fill with blanks to form diamond
  var output = this.fillOutput(rows,letters,middleRow)
  console.log('output='+'\n'+output)
  return output
}

Diamond.prototype.fillOutput = function(rows,letters,middleRow) {
  console.log('letters='+letters)
  var output= ''
  letters.forEach((i) => {
    var row = new Array(rows).fill(' ')
    var index = i.charCodeAt(0)-ACHAR
    row[middleRow - index] = i
    row[middleRow + index] = i
    var portion = ''
    row.forEach(function (character) {portion += character})
    output += portion + '\n'
  })
  return output
}

module.exports = Diamond

