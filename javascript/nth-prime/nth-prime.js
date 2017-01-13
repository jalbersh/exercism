function nth(which) {
    if (which == 0) throw new Error('Prime is not possible')
    if (which == 1) return 2
    if (which == 2) return 3
    var count = 2
    var number = 5
    //console.log('count='+count+'; which='+which+';number='+number)
    while (count < which) {
        //console.log('number='+number)
        if (isPrime(number)) {
            count++
        }
        if (count < which) number += 2
	}
	return number
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
    isPrime: nth,
    nth: nth
};