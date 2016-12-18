var Robot = function() {
    this.name = this.getName()
}

Robot.prototype.reset = function() {
	this.name = this.getName();
};

var usedNames = new Set();

var rand = function(max, min) {
	return Math.floor(Math.random() * (max - min + 1) + min)
};

var letter = function() {
	return rand('Z'.charCodeAt(0), 'A'.charCodeAt(0))
};

var digit = function() {
    return rand('9'.charCodeAt(0), '0'.charCodeAt(0))
};

Robot.prototype.getName = function() {
	do {
		var name = String.fromCharCode(letter(), letter(), digit(), digit(), digit());
	} while( usedNames.has(name) );
	usedNames.add(name);
	return name;
}

module.exports = Robot;