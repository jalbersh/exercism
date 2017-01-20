var Queens = function(positions) {
    this.white = positions ? positions.white : [0,3]
    this.black = positions ? positions.black : [7,3]
    if (this.white == this.black) {
        throw new Error('Queens cannot share the same space')
    }
    this.board = this.setup()
    return this
}

Queens.prototype.setup = function() {
    var board = [8,8]
    for (var row=0;row<8;row++) {
        for (var col=0;col<8;col++) {
            if (this.white[0] == row && this.white[1]==col) {
                board[row,col] = 'W'
            } else if (this.black[0] == row && this.black[1]==col) {
                board[row,col] = 'B'
            }  else {
                board[row,col] = '-'
            }
        }
    }
    return board
}

Queens.prototype.toString = function() {
    var str = '';
    for (var row=0;row<8;row++) {
        for (var col=0;col<8;col++) {
            if (this.white[0] == row && this.white[1]==col) {
                str += 'W'
            } else if (this.black[0] == row && this.black[1]==col) {
                str += 'B'
            }  else {
                str += '-'
            }
            if (col < 7) str += ' '
        }
        str += '\n'
    }
    return str
}

Queens.prototype.canAttack = function() {
    if (this.white[0]==this.black[0]) return true
    if (this.white[1]==this.black[1]) return true
    var rowDiff = Math.abs(this.white[0]-this.black[0])
    var colDiff = Math.abs(this.white[1]-this.black[1])
    return rowDiff==colDiff
}

module.exports = Queens