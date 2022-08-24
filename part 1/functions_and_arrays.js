// function showAlert(msg) {
//     console.log(msg) ;
// }
// showAlert("hey !!") ;

// // Hoisting 
// function hoistDemo() {
//     console.log(i) ;
//     var i =10 ;
// }
// hoistDemo() ;

// // Function Expressions
// var factorial = function fact(n) {
//     var ans = 1;
//     for(var i = 1; i<= n ; i++){
//         ans = ans* i ;
//     }
//     return ans ;
// } ;

// console.log(factorial(5)) ;

// // 
// var add = function(a, b) {
//     return a+b;
// }

// var subtract = function(a, b) {
//     return a-b;
// }

// var op = function (func) {
//     var x = 2;
//     var y = 3;
//     return func(x, y);
// }

// console.log(op(add));

// // Array
// var arr1= [1,2,3,4,5] ;
// var arr2 = new Array(6,7,8,9,10) ; 
// var arr3 = new Array(1000)

// console.log(arr1,arr2 , arr3);
// console.log(arr1[3]);

// arr1[8] = 100;
// console.log(arr1);

// // Splice Array
// var fruits = ['Apple', 'Orange', 'Kiwi', 'Strawberry','22'];

// fruits.splice(fruits.length, 1, fruits[0]);
// fruits.splice(0,1)
// // fruits.splice(4, 1, fruits[0]);
// console.log(fruits);


// // 
// function f(a,b = 1) {
//     console.log(a*b)
//   }
//   var x = // some hidden  value
//   f(5,x)


// // 


function cart() {
    let items = 0;
    return {
       addItem: function () {
            items++;
        },
        getItem: function () {
            return items;
        }
    };
}

const closure = cart();
closure.addItem();
closure.addItem();
closure.addItem();
console.log(closure.getItem());






