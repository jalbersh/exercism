var Triplet = function (arg1,arg2,arg3) {
    this.arg1 = arg1
    this.arg2 = arg2
    this.arg3 = arg3
};

Triplet.prototype.sum = function() {
    return this.arg1+this.arg2+this.arg3;
};

Triplet.prototype.product = function() {
    return this.arg1*this.arg2*this.arg3
};

Triplet.prototype.isPythagorean = function() {
    return Math.pow(this.arg1,2)+Math.pow(this.arg2,2) == Math.pow(this.arg3,2) ? true : false
};

Triplet.where = function(params) {
	/* Finds triplets with between given min and max, with sum where applicable */
	var triplets = [];
    var max=params.maxFactor;
    var min=params.minFactor || 2;
    var sum=params.sum || 0;
	for (var i=min;i<=max;i++){
		for (var j=i+1;j<=max;j++){
			for(var k=j+1;k<=max;k++){
			    var t = new Triplet(i,j,k)
			    if (sum != 0 && (t.sum() == sum)) {
				    t.isPythagorean() ? triplets.push(t) : {};
				} else if (sum == 0) {
					t.isPythagorean() ? triplets.push(t) : {};
				}
			}
		}
	}
	return triplets
};

module.exports = Triplet;