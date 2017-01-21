var Matrix = function (matrixData) {
    console.log('in Matrix with ' + matrixData)
    this.rowsCols = matrixData.split('\n')
    this.numRows = this.rowsCols.length
    this.rows = this.parseRows()
    //console.log('rows=' + this.rows)
    this.columns = this.parseCols()
    //console.log('cols=' + this.columns)
    this.numCols = this.columns.length
    this.saddlePoints = this.getSaddlePoints()
}

Matrix.prototype.parseRows = function () {
    return this.rowsCols.map(function (row) {
        return row.split(" ").map(function (cell) {
            return parseInt(cell)
        })
    })
}

Matrix.prototype.parseCols = function () {
    var cols = []
    for (var cell = 0; cell < this.rows.length; cell++) {
        cols[cell] = [];
        this.rows.forEach(function (row) {
            cols[cell].push(row[cell]);
        });
    }
    return cols
}

Matrix.prototype.getSaddlePoints = function () {
    var saddlePoint = []
    //console.log('in getSaddlePoints with rows=' + this.numRows + ' and cols=' + this.numCols)
    for (var r = 0; r < this.numRows; r++) {
        var row = this.rows[r]
        for (var c = 0; c < row.length; c++) {
            var val = row[c]
            //console.log('testing val=' + val + ' from row#' + r + ' and column#' + c)
            if (this.greatestRow(r, val) && this.leastCol(r, c, val)) {
                //console.log('saddlePoint pushing ' + r, c)
                saddlePoint.push([r, c])
            }
        }
    }
    return saddlePoint
}

Matrix.prototype.greatestRow = function (r, val) {
    var row = this.rows[r]
    //console.log('row=' + row)
    for (var c = 0; c < row.length; c++) {
        var cell = row[c]
        //console.log('cell=' + cell)
        if (cell > val) {
            //console.log('greatestRow returning false for ' + val)
            return false
        }
    }
    //console.log('greatestRow returning true for ' + val)
    return true
}

Matrix.prototype.leastCol = function (r, c, val) {
    for (var j = 0; j < this.numRows; j++) {
        if (j != r) {
            var row = this.rows[j]
            //console.log('row=' + row)
            var cell = row[c]
            //console.log('cell=' + cell)
            if (cell < val) {
                //console.log('leastCol returning false for ' + val)
                return false
            }
        }
    }
    //console.log('leastCol returning true for ' + val)
    return true
}

module.exports = Matrix