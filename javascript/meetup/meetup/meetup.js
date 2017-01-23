var meetupDay = function(year, month, day, nth) {
    var iday = -1;
    if (day === 'Sunday') iday = 0
    if (day === 'Monday') iday = 1
    if (day === 'Tuesday') iday = 2
    if (day === 'Wednesday') iday = 3
    if (day === 'Thursday') iday = 4
    if (day === 'Friday') iday = 5
    if (day === 'Saturday') iday = 6
    var date = null
    switch (nth) {
        case 'teenth':
            return getDate(year,month,iday,13,19)
        case '1st':
            return getDate(year,month,iday,1,7)
        case "2nd":
            return getDate(year, month, iday, 8, 14);
        case "3rd":
            return getDate(year, month, iday, 15, 21);
        case "4th":
            return getDate(year, month, iday, 22, 28);
        case "5th":
            date = getDate(year, month, iday, 29, 31);
            break
        case "last":
            date = getDate(year, month, iday, 25, 31);
            break
    }
    if (date == null) {
        throw "Date does not exist";
    }
    return date

}

function getDate(year,month,iday,start,end) {
            date = null
            for (var i=start;i<=end;i++) {
                var date = new Date(year, month, i)
                var nday = date.getDay()
                if (nday == iday) break
                date = null
            }
            return date
}

module.exports = meetupDay