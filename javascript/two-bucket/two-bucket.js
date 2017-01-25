var TwoBucket = function(sizeOne,sizeTwo,goal,starterBucket) {
    this.bucket1 = {capacity: sizeOne, currentAmount: 0}
    this.bucket2 = {capacity: sizeTwo, currentAmount: 0}
    this.goal = goal
    this.goalBucket = starterBucket
    this.goalBucketCapacity = this.goalBucket == 'one' ? sizeOne : sizeTwo
    this.otherBucketCapacity = this.goalBucket == 'one' ? sizeTwo : sizeOne
    this.otherBucket = 0
}

TwoBucket.prototype.moves = function() {
    // fill buckets until goal bucket contains goal amount
    var amountInGoal = 0
    var moves = 0
    while (amountInGoal !== this.goal) {
        console.log('amountInGoal='+amountInGoal+';this.otherBucket='+this.otherBucket+';moves='+moves)
        // Fill empty goal bucket
        if(amountInGoal == 0)
            amountInGoal = this.goalBucketCapacity
        // Empty a full other bucket
        else if(this.otherBucket == this.otherBucketCapacity)
            this.otherBucket = 0
        // Pour from goal bucket into other bucket
        else {
            // Pour all from the goal bucket into the other bucket
            if(this.otherBucket + amountInGoal <= this.otherBucketCapacity) {
                this.otherBucket += amountInGoal
                amountInGoal = 0
            }
            // Pour from goal bucket until other bucket is full
            else {
                amountInGoal -= this.otherBucketCapacity - this.otherBucket
                this.otherBucket = this.otherBucketCapacity
            }
        }
        moves++
    }
    console.log('amountInGoal='+amountInGoal+';this.otherBucket='+this.otherBucket+';moves='+moves)
    return moves
}

module.exports = TwoBucket