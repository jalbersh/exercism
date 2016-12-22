'use strict';

var Clock = function (hours, minutes) {
    this.hours = 0
    if (hours) {
        this.hours = parseInt(hours)
    }
    this.minutes = 0
    if (minutes) {
        this.minutes = parseInt(minutes)
    }
    if (this.minutes > 59) {
            this.hours += Math.floor(this.minutes / 60)
            this.minutes = this.minutes % 60
    } else if (this.minutes < 0) {
        this.hours += Math.floor(this.minutes / 60)
            this.minutes = 60 + (this.minutes % 60)
    }
    if (this.hours > 23) {
            this.hours = this.hours % 24
    } else if (this.hours < 0) {
            this.hours = 24 + (this.hours % 24)
    }
    if (this.hours == 24) {
            this.hours = 0;
    }
 };

Clock.at = function(hour, minutes) {
    return new Clock(hour, minutes)
};

Clock.prototype.toString = function() {
    var time = '00:00'
    var hrs = this.hours.toString()
    hrs = hrs.length == 1 ? ('0'+hrs) : hrs
    var mins = this.minutes.toString()
    mins = mins.length == 1 ? ('0'+mins) : mins
    time = hrs + ':' + mins
    return time
}

Clock.prototype.equals = function(clock2) {
    if (clock2.hours == this.hours && clock2.minutes == this.minutes) {
        return true
    }
    return false
}

Clock.prototype.plus = function(minutes) {
    if (minutes) {
        return new Clock(this.hours, this.minutes + minutes)
    }
    return this
}

Clock.prototype.minus = function(minutes) {
    return this.plus(-minutes)
}

module.exports = Clock;
