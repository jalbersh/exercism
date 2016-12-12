var PhoneNumber = function(phone) {
    this.phone = phone
}

PhoneNumber.prototype.number = function() {
    this.phone = this.phone.replace(/[().-\s]/g,"")
    if (this.phone.length == 11 && this.phone[0] == '1') {
        this.phone  = this.phone.substring(1)
        return this.phone
    }
    if (this.phone.length != 10) {
        return '0000000000'
    }
    return this.phone
}

PhoneNumber.prototype.areaCode = function() {
    return this.phone.substring(0,3)
}

PhoneNumber.prototype.toString = function() {
    area_code = this.phone.substring(0,3)
    prefix = this.phone.substring(3,6)
    postfix = this.phone.substring(6,10)
    return '('+area_code+') '+prefix+'-'+postfix
}

module.exports = PhoneNumber;