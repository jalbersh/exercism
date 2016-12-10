var DnaTranscriber = function(){
}

// Given a DNA strand, its transcribed RNA strand is formed by replacing
// each nucleotide with its complement:

DnaTranscriber.prototype.toRna = function(dna) {
    if (!dna) {
        throw new Error('The DNA must not be null')
    }
    if (dna.length == 0) {
        throw new Error('The DNA length must not be 0')
    }
    rna = '';
    for (i=0; i < dna.length; i++) {
        rna += this.transcribe(dna[i])
    }
    return rna
}

// * `G` -> `C`
// * `C` -> `G`
// * `T` -> `A`
// * `A` -> `U`
DnaTranscriber.prototype.transcribe = function(dna) {
    if (dna == 'G') { return 'C'}
    if (dna == 'C') { return 'G'}
    if (dna == 'T') { return 'A'}
    if (dna == 'A') { return 'U'}
    return dna
}

module.exports = DnaTranscriber;

