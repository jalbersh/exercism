var BinarySearch = function (inArray) {
    this.inArray = inArray

    this.search(inArray)
    this.sorted = undefined
    this.array = this.getArray()
}

BinarySearch.prototype.indexOf = function(key) {
    console.log('in indexOf with key=',key,';array=',this.inArray)
    var arr = this.search(this.inArray,key)
    for (var i=0;i<this.inArray.length;i++) {
        if (this.inArray[i] == key) {
            return i
        }
    }
    return -1
}

BinarySearch.prototype.getArray = function() {
    if (this.sorted != undefined) {
        return this.sorted
    }
    for (var i=0;i<this.inArray.length;i++) {
        if (this.inArray[i] > this.inArray[i+1]) {
            return undefined
        }
    }
    this.sorted = true
    return this.inArray
}

BinarySearch.prototype.search = function(arr,key) {
    console.log('in search with arr='+arr+';key=',key)
    if (arr == undefined) return undefined
    var len = arr.length
    console.log('len='+len)
    if (len == 0) {
        return []
    }
    var high = this.getHigh(arr)
    console.log('high='+high)
    var low = this.getLow(arr)
    console.log('low='+low)
    var half = Math.floor((len+1)/2)
    console.log('half='+half)
    var mid = arr[half]
    console.log('mid='+mid)
    if (mid == undefined) return undefined
    if (key == mid) {
        return half
    }
    if (key > mid) {
        var upperHalf = arr.slice(half)
        var newHigh = this.getHigh(upperHalf)
        var newLow = this.getLow(upperHalf)
        console.log('b4 call with key='+key)
        return this.search(upperHalf,newLow,newHigh,key)
    } else {
        var lowerHalf = arr.slice(0,half)
        var newHigh = this.getHigh(lowerHalf)
        var newLow = this.getLow(lowerHalf)
        console.log('b4 call with key='+key)
        return this.search(lowerHalf,newLow,newHigh,key)
    }
}

BinarySearch.prototype.getHigh = function(arr) {
    var high = 0;
    for (var i=0;i<arr.length;i++) {
        if (arr[i]>high) {
            high = arr[i]
        }
    }
    return high
}

BinarySearch.prototype.getLow = function(arr) {
    var low = 99999;
    for (var i=0;i<arr.length;i++) {
        if (arr[i]<low) {
            low = arr[i]
        }
    }
    return low
}

module.exports = BinarySearch;