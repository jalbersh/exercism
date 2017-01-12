var Matrix = function (matrixDef) {
    this.rowsCols = matrixDef.split('\n')
    this.numRows = this.rowsCols.length
    this.rows = this.parseRows()
    this.columns = this.parseCols()
}

Matrix.prototype.parseRows = function() {
    console.log('rowsCols='+this.rowsCols)
    return this.rowsCols.map(function(row) {
        return row.split(" ").map(function(cell) {
            return parseInt(cell)
        })
    })
}

Matrix.prototype.parseCols = function() {
    var cols = []
    for (var cell=0;cell<this.rows.length;cell++){
            cols[cell]=[];
            console.log('cell='+this.rows[cell])
            this.rows.forEach(function(row){
                console.log('row[cell]='+row[cell])
                cols[cell].push(row[cell]);
            });
    }
    return cols
}

module.exports = Matrix

