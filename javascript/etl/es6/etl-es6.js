(function() {
    "use strict";

    function ETL() {
    }

    ETL.prototype.transform = function(old) {
        var newPointsPerLetter = new Set()
        var keys = Object.keys(old)
        for (var i=0; i<keys.length; i++) {
            var key = keys[i]
            key = parseInt(key)
            var val = old[key].toString()
            val = val.toLowerCase()
            var vals = val.split(',')
            for (var j=0; j<vals.length; j++) {
                newPointsPerLetter[vals[j]] = key
            }
        }
        return newPointsPerLetter
    }

    module.exports = ETL
})();

