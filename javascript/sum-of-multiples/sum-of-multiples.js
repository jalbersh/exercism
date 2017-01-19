function to(limit) {
    var sum = 0;
    var added = []
    for (var j=0;j<this.factors.length;j++) {
        var factor = this.factors[j]
        //console.log('factor='+factor)
        for (var i = 1; i < limit; i++) {
            if (i % factor == 0 && added.indexOf(i) == -1) {
                //console.log('adding '+i)
                sum += i
                added.push(i)
            }
        }
    }
    console.log('returning '+sum)
    return sum
}

module.exports = function(factors) {
	return { factors: factors,
			 to: to
		   };
};