//In Pascal's Triangle each number is computed by
//adding the numbers to the right and left of the current position
//in the previous row.

var Triangle = function(numRows) {
	this.rows = [];
	this.numRows = numRows
	this.lastRow = []
	this.generate(numRows)
}

Triangle.prototype.generate = function(numRows) {
	var row = [1];
	for(var rowCtr=0; rowCtr<numRows; rowCtr++ ) {
		this.lastRow = row;
		//console.log('row='+row)
		this.rows.push(row);
		console.log('rows='+this.print())
		row = this.getNextRow(row);
	}
}

Triangle.prototype.getNextRow = function(row) {
	var nextRow = [];
	var prevVal = 0;
	for(var rowCtr=0; rowCtr<row.length; rowCtr++) {
		nextRow.push(row[rowCtr] + prevVal);
		prevVal = row[rowCtr];
	}
	nextRow.push(prevVal);
	//console.log('nextRow='+nextRow)
	return nextRow;
}

Triangle.prototype.print = function() {
    var str=''
    for (var rowCtr=0;rowCtr<this.numRows;rowCtr++) {
        if (this.rows[rowCtr]) {
            str += '['+this.rows[rowCtr]+']' + '\n'
        }
    }
    return str
}

module.exports = Triangle;