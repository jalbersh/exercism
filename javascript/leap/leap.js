// on every year that is evenly divisible by 4
// except every year that is evenly divisible by 100
// unless the year is also evenly divisible by 400

export class Year {

    constructor(year) {
        this.year = year
    }

    isLeap() {
        console.log('year=', this.year)
        if (this.year % 4) {
            console.log('divided by 4')
            if (this.year % 100) {
                console.log('divided by 100')
                if (this.year % 400) {
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
}