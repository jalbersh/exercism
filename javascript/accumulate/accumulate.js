function accumulate(stuff, func) {
    var list = []
    for (var i=0; i<stuff.length; i++) {
        list.push(func(stuff[i]))
    }
    return list;
};

module.exports = accumulate;