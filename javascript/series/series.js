var Series = function (num) {
    this.num = num
    this.sdigits = num.split(/(?=[0-9])/)
    this.digits = []
    for (var i=0;i<this.sdigits.length;i++) {
        this.digits.push(parseInt(this.sdigits[i]))
    }
};

Series.prototype.slices = function(size) {
    var arrays=[]
    if (size > this.digits.length) {
        throw new Error('Slice size is too big.')
    }
    for (var i=0;i<this.digits.length;i++) {
        var array = []
        for (var j=0;j<size;j++) {
            if (i+j < this.digits.length) {
                array.push(this.digits[i+j])
            }
        }
        if (array.length == size) {
            arrays.push(array)
        }
    }
    return arrays;
};

module.exports = Series;