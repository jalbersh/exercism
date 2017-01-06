//1 = wink = 1 = power and subscript 0
//10 = double blink = 2 = 1
//100 = close your eyes = 4 = 2
//1000 = jump = 8 = 3

var SecretHandshake = function (num) {
    this.cmds = [   'wink',
        'double blink',
        'close your eyes',
        'jump']
    if (!num.toString().match(/(^[0-9])/)) {
        throw(new Error('Handshake must be a number'))
    }
    this.decimal = num
    this.binary = num.toString(2)
    this.digits =  this.binary.toString().split(/(?=[0-1])/)
    //console.log(num+' has binary of '+this.binary)
};

SecretHandshake.prototype.commands = function() {
    var shake = []
    var numDigits = this.digits.length
    for (var place=0;place<numDigits;place++) {
        var digit = this.digits[place]
        if (digit == 1) {
            var sub = numDigits - place - 1
            var command = this.cmds[sub]
            if (command) {
                shake.push(command)
            }
        }
    }
    if (shake.length == 2) {
        return shake.reverse()
    }
    return shake
}

module.exports = SecretHandshake;