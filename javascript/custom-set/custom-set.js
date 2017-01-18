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
                console.log('subset-does not contain ' +
                    elements.get(ctr))
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

CustomSet.prototype.eql = function(elements) {
    if(this.items.length != elements.items.length)
        return false
    for(var i = 0; i < this.items.length; i++) {
        if(this.items[i] !== elements.items[i])
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
    var items = new CustomSet([])
    if (this.empty()) return elements
    if (elements.empty()) return this
    var inter = this.intersection(elements)
    console.log('inter='+inter.toList())
    var diff = this.difference(elements)
    console.log('diff='+diff.toList())
    items = new CustomSet(inter.toList().concat(diff.toList()))
    console.log('combined='+items.toList())
    return items
}

CustomSet.prototype.toList = function() {
    return this.items
}

CustomSet.prototype.clear = function() {
    this.items=[]
    return this
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