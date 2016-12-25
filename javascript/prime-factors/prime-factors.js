function primeFactors(number) {
	var factors = [];
	if (number == 1) {
	    return factors;
	}
	if (number == 2) {
	    factors.push(2);
	    return factors;
	}
	if (isPrime(number)) {
	    factors.push(3);
	    return factors;
	}
	for (var i=2; i <= number/2; i++) {
	    if (number % i == 0 && isPrime(i)) {
	        factors.push(i);
            for (var j=2; j<=10; j++) {
                             if (number % Math.pow(i,j) == 0) {
                                 factors.push(i);
                             }
                         }
	    }
	}
	return factors;
}

function isPrime(num) {
    if (num == 2 || num == 3) {
        return true;
    }
    for (var i=2; i<= num/2; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

module.exports = {
    for: primeFactors,
    isPrime: primeFactors
};