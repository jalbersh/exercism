// This is called the 'Hamming distance'.
//
//     It is found by comparing two DNA strands and counting how many of the
// nucleotides are different from their equivalent in the other string.
//
//     GAGCCTACTAACGGGAT
//     CATCGTAATGACGGCCT
//     ^ ^ ^  ^ ^    ^^
//
// The Hamming distance between these two DNA strands is 7.

var Hamming = function(){
}

Hamming.prototype.compute = function(dna1, dna2) {
    console.log('dna1=', dna1)
    console.log('dna2=', dna2)

    var distance = 0
    if (!dna1 || !dna2) {
        throw new Error('Both DNA strands must be defined')
        return 0;
    }
    if (dna1.length != dna2.length) {
        throw new Error('DNA strands must be of equal length.')
        return 0;
    }
    for (i=0; i<dna1.length; i++) {
        if (dna1.charAt(i) != dna2.charAt(i)) {
            distance++;
        }
    }
    return distance;
}

module.exports = Hamming;