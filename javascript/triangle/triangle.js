'use strict';

(function () {
    "use strict";

    function Triangle(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    Triangle.prototype.kind = function () {
        if (this.side1 == this.side2 && this.side1 == this.side3 && this.side2 == this.side3) {
            return 'equilateral';
        }
        if (this.side1 == this.side2 || this.side1 == this.side3 || this.side2 == this.side3) {
            return 'isosceles';
        }
        return 'scalene';
    };

    module.exports = Triangle;
})();

