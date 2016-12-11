// Write a program that calculates the moment when
// someone has lived for 10^9 seconds.
//
// A gigasecond is 10^9 (1,000,000,000) seconds.

var Gigasecond = function(date) {
    this.dateOfBirth = date
    console.log('Gigasecond instantiated')
}

Gigasecond.prototype.date = function() {
   var gigaDate = new Date(1000000000000 + this.dateOfBirth.getTime())
   return gigaDate
};

module.exports = Gigasecond;