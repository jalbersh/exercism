var STUDENTS = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Fred', 'Ginny', 'Harriet', 'Ileana', 'Joseph', 'Kincaid', 'Larry']
var PLANTS = {'G':'grass','C':'clover','R':'radishes','V':'violets'}
const PLANTS_PER_ROW=2

var Garden = function(diagram, students){
	this.students = students ? students : STUDENTS;
	var diagramRows = diagram.split('\n')
    this.row1=diagramRows[0]
    this.row2=diagramRows[1]
    var len = this.students.length
    for (var i=0;i<len-1;i++) {
	    var student = this.students[i]
	    //console.log('got student='+student)
		this[student.toLowerCase()] = this.getStudentPlants(student)
	}
}

Garden.prototype.getStudentPlants = function(student){
    console.log('in getStudentPlants: student='+student)
    var index = this.students.indexOf(student)
	var offset = index*PLANTS_PER_ROW
	//console.log('offset='+offset)
	//console.log('row1='+this.row1)
	var part1 = this.row1.substring(offset,offset+PLANTS_PER_ROW)
	//console.log('part1='+part1)
	//console.log('row2='+this.row2)
	var part2 = this.row2.substring(offset, offset+PLANTS_PER_ROW)
	//console.log('part2='+part2)
	var plant=part1+part2
	//console.log('plant='+plant)
	var codes = plant.split(/(?=[A-Z])/)
	//console.log('codes='+codes)
	var plants=[]
	for (var i=0;i<codes.length;i++) {
	    var code = codes[i]
	    //console.log('code='+code)
	    var p = PLANTS[code]
	    //console.log('p='+p)
	    plants.push(p)
	}
	console.log('got plants='+plants)
	return plants
};

module.exports = Garden
