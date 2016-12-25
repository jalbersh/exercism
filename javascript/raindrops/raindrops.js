//- If the number has 3 as a factor, output 'Pling'.
//- If the number has 5 as a factor, output 'Plang'.
//- If the number has 7 as a factor, output 'Plong'.
//- If the number does not have 3, 5, or 7 as a factor,
//  just pass the number's digits straight through.

(function () {
    "use strict";

    function Raindrops() {
    };

    Raindrops.prototype.convert = function (num) {
        var word='';
        if (num % 3 == 0) {
            word += 'Pling';
        }
        if (num % 5 == 0) {
            word += 'Plang';
        }
        if (num % 7 == 0) {
            word += 'Plong';
        }
        if (num % 3 != 0 && num % 5 != 0 && num % 7 !=  0) {
            return num.toString();
        }
        return word;
    };

    module.exports = Raindrops;
})();
