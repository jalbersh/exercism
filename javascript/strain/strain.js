function keep(list, func) {
    var keptList = []
    for (var i=0; i<list.length; i++) {
        if (func(list[i])) {
            keptList.push(list[i])
        }
    }
    return keptList;
};

function discard(list, func) {
    var keptList = []
    for (var i=0; i<list.length; i++) {
        if (!func(list[i])) {
           keptList.push(list[i])
        }
    }
    return keptList
};

module.exports = {
    keep: keep,
    discard: discard
}
