var LinkedList = function () {
    this.head = null
    this.tail = null
    this.length = 0
};

LinkedList.prototype.push = function(val) {
    this.tail = new Node(val, null, this.tail)
    if (this.length==0) {
        this.head = this.tail
    } else {
        this.tail.prev.next = this.tail
    }
    this.length++
}

LinkedList.prototype.pop = function() {
    if (this.length == 0) {
        return undefined
    }
    this.length--
    var ptr = this.tail;
    this.tail = ptr.prev
    if (this.length==0) {
        this.head = this.tail
    }
    ptr.delete()
    return ptr.val
}

LinkedList.prototype.shift = function() {
    if (this.length==0) {
        return undefined
    }
    this.length--
    var oldHead = this.head;
    if (oldHead.next) {
        this.head = oldHead.next
    }
    if (this.length == 0) {
        this.tail = this.head
    }
    oldHead.delete()
    return oldHead.val
}

LinkedList.prototype.print = function() {
    var ptr = this.head;
    while (ptr) {
        ptr = ptr.next;
    }

}

LinkedList.prototype.unshift = function(val) {
    this.head = new Node(val,this.head,null)
    if (this.length >= 1) {
        this.head.next.prev = this.head
    } else {
        this.tail = this.head
    }
    this.length++
}

LinkedList.prototype.count = function() {
    return this.length
}

LinkedList.prototype.delete = function(val) {
    var ptr = this.head;
    while (ptr && ptr.val != val) {
        ptr = ptr.next;
    }
    if (ptr) {
        this.length--;
        ptr.delete();
    }
}

var Node = function(val, next, prev) {
    this.val = val
    this.next = next
    this.prev = prev
}

Node.prototype.delete = function() {
    if (this.prev) {
        this.prev.next = this.next;
    }
    if (this.next) {
        this.next.prev = this.prev;
    }
    this.next = null;
    this.prev = null;
}

module.exports = LinkedList;