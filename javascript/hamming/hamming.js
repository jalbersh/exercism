// This is called the 'Hamming distance'.
//
//     It is found by comparing two DNA strands and counting how many of the
// nucleotides are different from their equivalent in the other string.
//
//     GAGCCTACTAACGGGAT
// CATCGTAATGACGGCCT
// ^ ^ ^  ^ ^    ^^
//
// The Hamming distance between these two DNA strands is 7.

var Hamming = function(dna1, dna2){
    this.dna1 = dna1
    this.dna2 = dna2
    console.log('Hamming instantiated with dna1=',this.dna1)
}

Hamming.prototype.compute = function() {
    console.log('dna1=', this.dna1)
    console.log('dna2=', this.dna2)

    var distance = 0
    for (i=0; i<this.dna1.length; i++) {
        if (this.dna1.charAt(i) != this.dna2.charAt(i)) {
            distance++;
        }
    }
    return distance;
}

module.exports = Hamming;