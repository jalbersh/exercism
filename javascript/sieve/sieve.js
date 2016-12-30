var Sieve = function (high) {
    this.primes = [2]; // 2 is 1st prime
	var sieve = Array.apply(null, new Array(high+1))
		.map(Boolean.prototype.valueOf, true); // initialize to true until found not prime

	for (var i=3; i<sieve.length; i+=2) { // odds only
		if (sieve[i]) {
			this.primes.push(i);
			for( var j=2;j<sieve.length;j++) {
				if (i * j < high) { // multiples of i are not prime
					sieve[i * j] = false;
				}
			}
		}
    }
};

module.exports = Sieve;