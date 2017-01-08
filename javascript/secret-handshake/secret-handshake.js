//1 = wink = 1
//10 = double blink = 2
//100 = close your eyes = 4
//1000 = jump = 8

var SecretHandshake = function (num) {
    this.cmds = [   'wink',
                    'double blink',
                    'close your eyes',
                    'jump']
    this.decimal = num
    console.log('decimal='+this.decimal)
    this.binary = this.toBinary(num)
    console.log('binary='+this.binary)
    this.digits =  this.binary.toString().split(/(?=[0-1])/)
    console.log('digits='+this.digits)

};

    SecretHandshake.prototype.toBinary = function(number) {
        var i = -1;
        var binary='';
        var rem = number
        while (rem > 0) {
            while (Math.pow(2,i) <= rem) {
                i++;
            }
            if (Math.pow(2,i) != rem) {
                i--;
            }
            console.log('i='+i)
            rem -= Math.pow(2,i);
            console.log('rem='+rem)
            binary += '1';
        }
        while (binary.length < i) {
            binary += '0'
        }
        return binary
    }

 SecretHandshake.prototype.commands = function() {
    var subscript = this.digits.length
    console.log('sub='+subscript)
    var shake = []
    shake.push(this.cmds[subscript])
    return shake
}

module.exports = SecretHandshake;