var Flattener = function () {
}

Flattener.prototype.flatten = function(arrays) {
  //console.log('arrays='+arrays)
  if(!Array.isArray(arrays)) {
        //console.log('arrays='+arrays)
        return [arrays];
  }
  var array = []
  for(var i = 0; i < arrays.length; i++) {
    array = this.concat(array,this.flatten(arrays[i]))
  }
  return array
}

Flattener.prototype.concat = function(array1, array2) {
    //console.log('in concat with '+array1+' and '+array2)
    for (var i=0;i<array2.length;i++) {
        var obj = array2[i]
        //console.log('obj='+obj)
        if (obj != undefined) {
            //console.log('pushing '+obj)
            array1.push(obj)
        }
    }
    //console.log('returning '+array1)
    return array1
}

module.exports = Flattener
