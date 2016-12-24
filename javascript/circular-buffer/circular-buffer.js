var circularBuffer = function (size) {
    var buffer = [];
    var currentPosition = 0;
    var oldest = -1;

    function write(value) {
        if (value) {
            if (buffer.length >= size) {
                throw new bufferFullException();
            }
            buffer.push(value)
        }
    }

    function forceWrite(value) {
            if (buffer.length >= size) {
                buffer.shift();
            }
            if (buffer.length <= 0) {
                oldest = currentPosition;
            }
            buffer.push(value)
        }

    function read() {
            if (buffer.length <= 0) {
                throw new bufferEmptyException()
            }
            var value = buffer.shift()
            currentPosition++;
            return value
        }

    function clear() {
            buffer = []
    }

    return {
        write: write,
        forceWrite: forceWrite,
        read: read,
        clear: clear
    }
};

function bufferEmptyException() {
        name = "EmptyBuffer";
        message = "Buffer is empty";
}


function bufferFullException() {
        name = "FullBuffer";
        message = "Buffer is full";
}

module.exports = {
    circularBuffer: circularBuffer,
    bufferEmptyException: function() {
        return new bufferEmptyException()
    },
    bufferFullException: function() {
        return new bufferFullException()
    }
};

