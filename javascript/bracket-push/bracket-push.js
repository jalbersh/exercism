var OPEN='[,{,(,'
var CLOSE='],},),'
var bracket = function(input) {
    if (input.search(/[\]\}\)]/) == -1) return false
    var s1 = 0
    var openings = OPEN.split(',').map(function(character) {
        var pos = input.indexOf(character)
        if (pos > s1) {
            s1 = pos
        }
    })
    var s2 = 0
    var closings = CLOSE.split(',').map(function(character) {
        var pos = input.indexOf(character)
        if (pos > s2) {
            s2 = pos
        }
    })
    //console.log('s1='+s1)
    //console.log('s2='+s2)
    if (s1 > s2) return false
    return true;
}

module.exports = bracket