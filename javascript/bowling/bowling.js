const MAX_ROLLS=21
const MIN_ROLLS=12
const MAX_PINS=10
const LAST_FRAME_BALL=20
const BONUS_FRAME=11

var Bowling = function(rolls) {
    this.rolls = rolls
    console.log('')
}

Bowling.prototype.score = function() {
    var score = 0
    var strikes = []
    var spares = []

    var frame = {ball1: 0, ball2: 0, ball3: 0, score: 0}
    var spare = false
    if (this.rolls.length < MIN_ROLLS) {
        throw new Error('Score cannot be taken until the end of the game')
    }
    for (var i=0;i<MAX_ROLLS;i++) {
        var roll = this.rolls[i]
        if (roll < 0 || roll > MAX_PINS) {
            throw new Error('Pins must have a value from 0 to 10');
        }
        if (roll != undefined) {
            if (roll != MAX_PINS && this.even(i)) {
                // completion of a frame in previous roll
                frame = {ball1: 0, ball2: 0, ball3: 0, score: 0}
                spare = false
                frame.ball1 = roll
            } else if (roll != MAX_PINS) {
                // 2nd roll of frame
                if (frame.ball2 == 0) {
                    frame.ball2 = roll
                }
            }
            var ball2 = this.rolls[i+1] != undefined &&
                        i+1 < LAST_FRAME_BALL ? this.rolls[i+1] : 0
             if (i % 2 == 0 && i < 18 &&
                 roll+ball2 > MAX_PINS &&
                 roll+ball2 != LAST_FRAME_BALL &&
                 roll != MAX_PINS) {
                 throw new Error('Pin count exceeds pins on the lane')
             }
            if (roll == MAX_PINS && i < 19) {
                strikes = this.handleStrikes(strikes,i)
            } else if (roll != 0 &&
                       roll + ball2 == MAX_PINS &&
                       i+1 < LAST_FRAME_BALL) {
                spare = true
                spares = this.handleSpares(spares,i,roll,ball2)
                if (!this.even(i)) spare = false
            } else if (!spare && i<LAST_FRAME_BALL) {
                score += roll
            } else {
                spare = false
            }
        }
    }
    if (this.rolls.length==MAX_ROLLS &&
        (strikes.length < 1 || strikes[strikes.length-1].number < 18) &&
        (spares.length < 1 || spares[spares.length-1].number == MAX_ROLLS)) {
        throw new Error('Should not be able to roll after game is over')
    }
    score = this.calcStrikes(strikes,score)
    score = this.calcSpares(spares,score)
    console.log('for '+this.rolls+' got score='+score)
    return score
}

Bowling.prototype.even = function(i) {
    return i % 2 == 0
}

Bowling.prototype.calcStrikes = function(strikes,score) {
    var ctr=0
    strikes.forEach(function(frame) {
        ctr++
        if (frame.ball1 > 0 && ctr < BONUS_FRAME) {
            var bonus = frame.number < LAST_FRAME_BALL-1 ? frame.ball3 : 0
            var ball2 = frame.number == LAST_FRAME_BALL-2 ? 0 : frame.ball2
            score += frame.ball1 + ball2 + bonus
        }
    })
    return score
}

Bowling.prototype.calcSpares = function(spares,score) {
    spares.forEach(function(frame) {
        if (frame.ball1 > 0) {
            score += frame.ball1 + frame.ball2 + frame.ball3
        }
    })
    return score
}

Bowling.prototype.handleStrikes = function(strikes, i) {
                console.log('STRIKE!!!')
                var strikeFrame = {number: i, ball1: MAX_PINS, ball2: this.rolls[i+1] ?
                    this.rolls[i+1] : 0, ball3: this.rolls[i+2] ? this.rolls[i+2] : 0}
                if (strikeFrame.number < LAST_FRAME_BALL &&
                    strikeFrame.ball2+strikeFrame.ball3 > MAX_PINS &&
                    strikeFrame.ball2 != MAX_PINS) {
                    throw new Error('Pin count exceeds pins on the lane')
                }
                if (i == LAST_FRAME_BALL-2 &&
                    (this.rolls[i+1] == undefined || this.rolls[i+2] == undefined)) {
                    throw new Error('Score cannot be taken until the end of the game')
                }
                strikes.push(strikeFrame)
                return strikes
}

Bowling.prototype.handleSpares = function(spares, i, roll, ball2) {
                console.log('SPARE!!!')
                var spareFrame = {number: i, ball1: roll, ball2: ball2, ball3:
                    this.rolls[i+2] ? this.rolls[i+2] : 0}
                if (i == 18 && (this.rolls[i+1] == undefined || this.rolls[i+2] == undefined)) {
                    throw new Error('Score cannot be taken until the end of the game')
                }
                spares.push(spareFrame)
                return spares
}

module.exports = Bowling
