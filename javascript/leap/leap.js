// on every year that is evenly divisible by 4
// except every year that is evenly divisible by 100
// unless the year is also evenly divisible by 400

var Year = function(year) {
    this.year = year;
    console.log('Year instantiated');
}

var Year = function(year1, year2, a, b, c){
    this.year = year1
    this.year2 = year2
    console.log('year-2arg instantiated')
}

Year.prototype.isLeap = function() {
    console.log('year=', this.year)
    if (this.year % 4 == 0) {
        console.log('divided by 4')
        if (this.year % 100 == 0) {
            console.log('divided by 100')
            if (this.year % 400 == 0) {
                console.log('divided by 400')
                return true
            }
            console.log('not divided by 400, but is divided by 1--')
            return false
        }
        console.log('not divided by 100')
        return true
    } else {
        console.log('not divided by 4')
        return false
    }
}

module.exports = Year;