var Robot = function (matrixDef) {
    // (north, east, south, or west)
    this.ORIENTATIONS=['north','east','south','west']
    // R = Right, L=Left, A=Advance
    this.MOVEMENTS=['Right','Left','Advance']
    this.bearing = 'north'
    this.x = 0
    this.y = 0
    this.coordinates = [this.x,this.y]
}

Robot.prototype.instructions = function(actions) {
    var instructions = []
    actions.split(/(?=[A-Z])/).forEach(function(action) {
        //console.log('action='+action)
        if (action == 'R') {
            //console.log('righting')
            instructions.push('turnRight')
        } else if (action == 'L') {
            //console.log('lefting')
            instructions.push('turnLeft')
        } else if (action == 'A') {
            //console.log('advancing')
            instructions.push('advance')
        }
    })
    return instructions
}

Robot.prototype.evaluate = function(actions) {
    var instructions = this.instructions(actions)
    //console.log('all instructions='+instructions)
    for (var i=0;i<instructions.length-1;i++) {
        var instruct = instructions[i]
        //console.log('in forEach with instruct='+instruct)
        if (instruct == 'turnRight') {
            //console.log('calling turnRight')
            this.turnRight()
        } else if (instruct == 'turnLeft') {
            //console.log('calling turnLeft')
            this.turnLeft()
        } else if (instruct == 'advance') {
            //console.log('calling advance')
            this.advance()
        }
    }
}

Robot.prototype.place = function(position) {
    this.at(position.x,position.y)
    this.orient(position.direction)
}

Robot.prototype.turnRight = function() {
    //console.log('in turnRight')
    if (this.bearing == 'north') {
        this.bearing='east'
    } else if (this.bearing == 'east') {
        this.bearing='south'
    } else if (this.bearing == 'south') {
        this.bearing='west'
    } else if (this.bearing == 'west') {
        this.bearing='north'
    }
}

Robot.prototype.turnLeft = function() {
    //console.log('in turnLeft')
    if (this.bearing == 'north') {
        this.bearing='west'
    } else if (this.bearing == 'east') {
        this.bearing='north'
    } else if (this.bearing == 'south') {
        this.bearing='east'
    } else if (this.bearing == 'west') {
        this.bearing='south'
    }
}

Robot.prototype.advance = function() {
    //console.log('in advance with old coords='+this.coordinates)
    if (this.bearing == 'north') {
        this.y++
    } else if (this.bearing == 'south') {
        this.y--
    } else if (this.bearing == 'east') {
        this.x++
    } else if (this.bearing == 'west') {
        this.x--
    }
    this.coordinates = [this.x,this.y]
    //console.log('got '+this.bearing+'; coords='+this.coordinates)
}

Robot.prototype.orient = function(direction) {
    if (this.ORIENTATIONS.indexOf(direction) === -1) {
        throw new Exception('Invalid Robot Bearing')
    }
    this.bearing = direction
}

Robot.prototype.at = function(x,y) {
    this.x=x
    this.y=y
    this.coordinates=[x,y]
}

module.exports = Robot