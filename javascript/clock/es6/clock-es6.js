
Clock = function(hours, minutes) {
	minutes = minutes || 0
	this.minutes = minutes % 60 + (minutes < 0 ? +60 : 0)
	this.hours = (hours + Math.floor(minutes / 60)) % 24
	this.hours += this.hours < 0 ? +24 : 0
}

Clock.prototype.at = function(hours, minutes) {
    let currentDate = new Date()
    currentDate.setHours(parseInt(hours))
    currentDate.setMinutes(parseInt(minutes))
    let time = currentDate.getHours().toString() + ":"
        + currentDate.getMinutes().toString()
    return time
}

//Clock.prototype.minus = function(minutes) {
//	return new Clock(this.hours, this.minutes - minutes)
//}
//
//Clock.prototype.plus = function(minutes) {
//	return new Clock(this.hours, this.minutes + minutes)
//}
//
//Clock.prototype.equals = function(other) {
//	return this.hours == other.hours &&
//		this.minutes == other.minutes
//}

Clock.prototype.toString = function() {
	const hours = ("00" + this.hours).slice(-2)
	const minutes = ("00" + this.minutes).slice(-2)
	return hours + ":" + minutes
}

export default {
    Clock
};