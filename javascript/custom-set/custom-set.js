var CustomSet = function(elements) {
    this.items = []
    if (elements) {
        console.log('elements length='+elements.length)
        for (var i=0;i<elements.length; i++) {
            var element = elements[i]
            console.log('calling add with '+element)
            this.add(element)
        }
    }
    return this
}

CustomSet.prototype.empty = function() {
    console.log('in empty with '+this.items)
    if (this.items && this.size() > 0) {
        console.log("empty returning false")
        return false
    }
    console.log("empty returning true")
    return true
}

CustomSet.prototype.get = function(ctr) {
    return this.items[ctr]
}

CustomSet.prototype.contains = function(item) {
    return this.items.indexOf(item) != -1
};

CustomSet.prototype.contains1 = function(element) {
    console.log('in contains with '+this.items+' and '+element)
    if (this.empty() || !element) return false
    for (var ctr=0;ctr<this.size();ctr++) {
        console.log('contains: checking for element='+element+' in '+this.items)
        if (element.length>1) {
            console.log('element.length='+element.length)
            for (var i=0;i<element.length;i++) {
                var elem = element[i]
                console.log('got elem='+elem)
                var item = this.get(ctr)
                console.log('item='+item+'; with length='+item.length)
                if (item.length > 1) {
                    for (var j=0;j<item.length;j++) {
                        var it = item[j]
                        console.log('it='+it+';elem='+elem)
                        if (it != elem) return false
                    }
                } else {
                    if (elem != item) return false
                }
            }
            return true
        } else {
            console.log('items[' + ctr + ']=' + this.get(ctr))
            if (element == this.get(ctr)) return true
        }
    }
    console.log('contains-not found')
    return false
}

CustomSet.prototype.subset = function(elements) {
    console.log('in subset with '+elements)
    if (!elements) return true
    if (elements.size() == 0) return true
    if (!this.items) return false
    if (elements.size() > this.size()) {
        console.log('subset-size issue-returning false')
        return false
    }
    if (this.eql(elements)) return true
    console.log('subset-checking elements with elements.length='+elements.length)
    for (var ctr=0;ctr<this.items.length;ctr++) {
        console.log('subset: is elements[' + ctr + ']=' +
            elements.get(ctr) + ' in ' + this.items)
        if (elements.get(ctr)) {
            if (!this.contains(elements.get(ctr))) {
                console.log('subset-does not contain ' + elements.get(ctr))
                return false
            }
            console.log(elements.get(ctr)+' in')
        }
    }
    console.log('subset-returning true')
    return true
}

CustomSet.prototype.disjoint = function(elements) {
    console.log('in disjoint')
    if (this.empty() && elements.empty()) return true
    if (this.empty() && !elements.empty()) return true
    if (!this.empty() && elements.empty()) return true
    console.log('after initial checks')
    var found=false
    console.log('elements.size()='+elements.size())
    for (var ctr=0;ctr<elements.size();ctr++) {
        console.log('disjoint checking='+elements.get(ctr))
        if (this.contains(elements.get(ctr))) return false
    }
    return true
}

CustomSet.prototype.eql1 = function(elements) {
    if(this.items.length != elements.items.length)
		return false
	for(var i = 0; i < this.items.length; i++) {
		if(this.items.get(i) != elements.items.get(i))
			return false
	}
	return true
}

CustomSet.prototype.eql = function(set_b) {
	if(this.items.length != set_b.items.length)
		return false
	for(var i = 0; i < this.items.length; i++) {
		if(this.items[i] !== set_b.items[i])
			return false
	}
	return true
}

CustomSet.prototype.difference = function(elements) {
    var items = []
    for (var ctr=0;ctr<this.items.length;ctr++) {
        var item = this.get(ctr)
        if (!elements.contains(item)) {
            items.push(item)
        }
    }
    return new CustomSet(items)
}

CustomSet.prototype.union = function(elements) {
    var items = []
	items.concat(this.toList(), elements.toList())
	return new CustomSet(items)
}

CustomSet.prototype.toList = function() {
    return this.items
}

CustomSet.prototype.clear = function() {

}

CustomSet.prototype.size = function() {
    if (!this.items) return 0
    return this.items.length
}

CustomSet.prototype.intersection = function(elements) {
    var items = []
    for (var ctr=0;ctr<this.items.length;ctr++) {
        var item = this.get(ctr)
        if (elements.contains(item)) {
            items.push(item)
        }
    }
    return new CustomSet(items)
}

CustomSet.prototype.add = function(element) {
    //if (element) {
        if (!this.contains(element)) {
            console.log('pushing ' + element)
            this.items.push(element)
            this.items.sort()
        }
        console.log('after adding with ' + this.items)
        return this
    //}
}

module.exports = CustomSet