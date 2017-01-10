var Bst = function (val) {
     this.head = new Node(val,null,null)
     //console.log('head.data='+this.head.data)
     this.data = this.head.data
     return this.head
}

var Node = function(val, left, right) {
    this.data = val
    this.left = left
    this.right = right
}


Node.prototype.insert = function(val) {
        //console.log('in Node.insert with '+val+' and this='+this)
        //console.log('calling search')
        var ptr = this.search(this,val)
        //console.log('search returned '+ptr.data)
        if (ptr.data >= val) {
            //console.log('left')
            ptr.left = new Node(val,null,null)
            //console.log('left1='+ptr.left.data)
            //this.data = ptr.data
        } else {
            //console.log('right')
            ptr.right = new Node(val,null,null)
            //this.data = ptr.data
            //console.log('right1='+ptr.right.data)
        }

}

Node.prototype.search = function(head,val) {
    //console.log('in search with head='+head+';val=',val)
    if (head == null) return null
    //console.log('head.data='+head.data)
    if (val > head.data) {
        if (head.right != null) {
            //console.log('going right')
            return this.search(head.right,val)
        } else {
            //console.log('returning head1')
            return head
        }
    } else if (val < head.data) {
        if (head.left != null) {
            //console.log('going left')
            return this.search(head.left,val)
        } else {
            //console.log('returning head2')
            return head
        }
    } else {
        //console.log('returning head3')
        return head
    }
}

Node.prototype.each = function(func) {
    if (this.left) {
        this.left.each(func)
    }
    func.call(this, this.data)
    if (this.right) {
        this.right.each(func)
    }
}

module.exports = Bst;
