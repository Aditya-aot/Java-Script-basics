
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
function change1(obj) {
    obj.name = "ninjas"
  }
  function change2(obj) {
    obj = {name: "changed"}
  }
  
  var obj = {name:"coding"}
  
  change1(obj)
  change2(obj)
  console.log(obj.name)  