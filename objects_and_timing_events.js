
// object
var student = {"name":"abc", rollno:123,marks:90} ;
console.log(student)
console.log(student.marks)
console.log(student["marks"])

delete student.marks
console.log(student)


// 

for (var prop in student) {
    console.log(prop, student[prop]) ;
}

// or
var keys = Object.keys(student) ;
console.log(keys)

// timing events
function sayhello() {
    console.log("hello") ;
}
setTimeout(sayhello, 2000) ;


// 
var d = {h: 2, j: 3}

var e = d
var f = {...d, j: 4}

console.log(f.h)
console.log(f.j)