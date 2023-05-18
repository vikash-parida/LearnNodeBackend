
// closures in javascript when function return a function closure are create and inner  function access after outer function pop out from stack is call closures

// function  cellMeMayBe(){
//     let cell = `hi! i am now here`
//     setTimeout(function(){
//         console.log(cell)
//     },5000)

// }

// cellMeMayBe()


//closure give  memory efficient 

// function hhd(){
//     let array = new Array(10000).fill('$')

//     return function printArrayValue(index){
//         console.log(array[index]);
//     }
// }

// let fun1 = hhd();


// console.log(fun1(555));
// console.log(fun1(555));
// console.log(fun1(555));
// console.log(fun1(555));
// console.log(fun1(555));
// console.log(fun1(555));
// console.log(fun1(555));

// closure in  use encapsulation 


// function outerFunction() {
//   var outerVariable = 'Outer';

//   function innerFunction() {
//     var innerVariable = 'Inner';
//     console.log(innerVariable); // Accessible inside innerFunction
//     console.log(outerVariable); // Accessible inside innerFunction
//     console.log(dynamicVariable); // Accessible inside innerFunction due to dynamic scope
//   }
//   innerFunction();

// }

// function dynamicScopeExample() {
//   var dynamicVariable = 'Dynamic';
//   outerFunction();
// }

// dynamicScopeExample();
