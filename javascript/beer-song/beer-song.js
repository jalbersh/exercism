//# Beer Song
//
//Write a program which produces the lyrics to that beloved classic,
//that field-trip favorite: 99 Bottles of Beer on the Wall.

var BeerSong = function() {
}

const PART1 = ' bottles of beer on the wall, '
const PART2 = ' bottles of beer.\nTake one down and pass it around, '
const PART3 = ' bottles of beer on the wall.\n'

BeerSong.prototype.verse = function(number) {
    var string
    if (number == 0) {
        string = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
    } else if (number == 1) {
        string = '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
    } else if (number == 2) {
        string = '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n';
    } else {
        string = number.toString() + PART1 + number.toString() + PART2+(number-1).toString()+PART3
    }
    return string
}

BeerSong.prototype.sing = function(start, end) {
    var song=''
    for (i = start; i >= end; i--) {
        song = song + i.toString() + PART1 + i.toString() + PART2+(i-1).toString()+PART3
        if (i != end) {
            song = song + '\n'
        }
    }
    return song
}

module.exports = BeerSong