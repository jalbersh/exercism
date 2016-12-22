(function() {
    "use strict";

    var usedNames = new Set();

    function rand(max, min) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function letter() {
        return rand(90, 65) // Z - A
    }

    function digit() {
        return rand(57, 48) // 9 - 0
    }

    function Robot() {
      this.name = this.getName();
    };

    Robot.prototype.getName = function() {
        do {
            var newName = String.fromCharCode(letter(), letter(), digit(), digit(), digit());
        } while( usedNames.has(newName) )
        usedNames.add(newName)
        return newName
    }

    Robot.prototype.reset = function() {
      this.name = this.getName();
    }

    module.exports = Robot;
})();

