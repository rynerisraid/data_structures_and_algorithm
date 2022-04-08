
const { genStuData } = require('./hash-integer')
const { HashTable } = require('./hash')

var numStudents = 10;
var arrSize = 97;
var idlen = 9;
var students = new Array(numStudents);
console.log(students)
genStuData(students)
console.log(students)

var hTable = new HashTable();
for(var i=0;i<students.length;++i){
    hTable.put(students[i]);
}
hTable.showDistro()
