

// let arr = [1,2,3,4,5,6,7,8,9,10];

// let squareArr = [];


// for(let i = 0; i< arr.length;i++){
//     squareArr.push(arr[i] * arr[i])
// }

// console.log(squareArr);

// map method 
// map will loop every element of your array and will perform specific operations that  you have provided
//map method is always return a new array with a results

// let arr = [1,2,3,4,5,6,7,8,9,10];

// let squareArr = arr.map((num)=>{
//  return num * num
// })

// console.log(squareArr);

// let transactions = [1000,1080,4000,2000,-892,3800,-4500]

// let inrToDollar = 80

// let  transactionsInDollar = transactions.map((value)=> result = value/inrToDollar)

// console.log(transactionsInDollar);

// forEach method will loop every element of your  array and will perform specific operations that you have provided forEach is not return new array like map method   

//  let transactions = [1000,1080,4000,2000,-892,3800,-4500]

//  let inrToDollar = 80
// let result = []
 
//  let  transactionsInDollar = transactions.forEach((value)=>{

//      result = value/inrToDollar
//     console.log(result);
//     })

    // some method 

    // let arr = [1000,2000,-1000,2500,-1000]

    // let result = arr.some((num)=> num>0 )

    // console.log(result);

   // every method 
    // let arr1 = [1000,2000,-1000,2500,-1000]

    // let result1 = arr.every((num)=> num>0 )

    // console.log(result1);



//  let arr = [1000,2000,-1000,2500,-1000];

//   resultArr = arr.filter((x)=> x<0)

//   console.log(resultArr);

// let data = {name:"vikas"};
// console.log(delete data.name);


// let data = {name:"vikas"};
// Object.freeze(data)
// console.log(delete data.name);

// let data = {name:"rakesh"}

// console.log(delete data);

// let data = ["vikash","rakesh","sandhya","anam","ranjita"];

// let [,,z] = data;

// console.log(z);


// let obj1 = {name:"vikash",age:25,contact:'8898005488'};
// let obj2 = {first:"rakesh",last:"parida",mob:'7859648525'};

//  obj1 = {...obj1,...obj2} 

// console.log(obj1);


// let result = 0||false||null||NaN||undefined||""||[]

// console.log(result);

// console.log(Promise.resolve(5));

// let a = 100;
// function fun(){
// console.log(a);
// let a = 10;
// }

// fun();



// let a = 1000;
// function fun(){
//     console.log(a);
// }
// fun();

//arrow function
// console.log(`${(x => x)("i love")} to program`)


// function sum(x,y,z){
//     return x + y + z
// }
// console.log(sum(...[1,2,3]));


// let str = 'this is a string datatype';

// console.log(!typeof str === 'object');
// console.log(!typeof str === 'string');
// console.log(!typeof str === false);



//  let a = "string";
//  let b = 10;

//  console.log(isNaN(a));
//  console.log(isNaN(b));


// let obj = {name:"aachal"}

// Object.freeze(obj);
// Object.seal(obj);
// console.log(obj.name  = "ranita") 
// console.log(obj);


// let number = [2,0,9,7]// remove first 

// let  arr = [1,2,3]
// //in the array there are 0 index , 1 index and 2 index .
// if(arr[2] != 30){
// console.log(false)
// }

//From the above code we will get false as result because when it will get arr[2] is 3 not 30 like that 
// if(arr[3] != 56){
// console.log(true);
// arr[3] = 56;
// }

// console.log(arr[3]);

// let data = {
//     name:"aachal"
// }

// console.log(delete data);

// let data = "false";
// console.log(!data); // string convert into boolean false value 

// let data = "true";
// console.log(!!data); //string convert into boolean true  value

// let arr = ["vikash","rakesh","ranita"];

// console.log(delete arr[1]);

// console.log(arr)
// let obj1 = {name:"aachal",age:25,mob:'8898005488'};
// let obj2 = {name:"neha",address:"andheri"}

// let newObj = {...obj1,...obj2};
// console.log(newObj);

// let arr1 = [1,2,3,4,5,6];
// let arr2 = [6,7,8,9,10];

// let newArr = [...arr1,...arr2];
// console.log(newArr);

// async function fun(){
//     console.log(1);

//    fun2().then((data)=>{
//     console.log(3)
//    })
//    await fun2();
   
//     // console.log(3);
// } 

// fun();
// function fun2() {
//     return new Promise((resolve, reject) => {
//         (setTimeout(()=>{
// resolve(console.log(2))
// // console.log(2);
//         },1000))
//     })
    
// }

//                                                  class in javascript 
// class Persion {
//     constructor(_name,_age,_address){
//         this.name = _name
//         this.age = _age
//         this.address = _address
//     }

// }

// let p1 = new Persion("vikash",25,"andheri");

// console.log(p1);

// let p2 = {...p1}

// console.log(p2);

//                                     constructor function in javascript

// function Persion(_name,_age,_address){
//         this.name = _name
//         this.age = _age
//         this.address = _address
// };


// let p1 = new Persion("vikash",25,"andheri");

// console.log(p1);


// let a = 10;
// setTimeout(()=>{
//     console.log(a)
// },0)
// a = 100;

// let a = 1;
// let c = 2;
// let b = 1;

// console.log(--c === a);
// console.log(a === --c === b)


// console.log(3*3); // return 9
// console.log(3**3); // return 27
// console.log(3***3); // return error "*"

// let a = [[[[[[[[[[]]]]]]]]]];

// console.log(a); // give nested array

// function fun1(){
//     console.log(name);
//     console.log(price);

//     var name = "mobile";
//     let price = 100;
// }

// fun1()

// let data = "size";

// let obj = {
//     size : 1000
// }

// console.log(obj[data]);
// console.log(obj["size"]);
// console.log(obj.size);
// console.log(obj.data);

// function run() {
//     console.log("hii");  
// }

// run.mobile = 8898005488;

// console.log(run.mobile);

// run()


// let arr = [10,1,25,4,6,4,151,84,1,6544,21,1,4,4,,,64,6,44,1,21,51,84,8,4,1,54,4,8];

// console.log(arr.sort());



// deep copy
// let obj = {
//     prop1:{
//         prop2:{
//             prop3:{
//                 fname:"vikas"
//             }
//         }
//     }
// }


// let objClone = structuredClone(obj)

// console.log(`obj === objClone | ${obj === objClone}`);
// console.log(`obj.prop1 === objClone.prop1| ${obj.prop1 === objClone.prop1}`);




// const transferred = structuredClone(
//     { x: { y: { z: arrayBuffer1, w: arrayBuffer2 } } },
//     { transfer: [arrayBuffer1] }
//   );

//   console.log(transferred);


// let os = require('os')

// console.log(os.release());

// let fs = require('node:fs')

// console.log(fs);


// function loopRun(){
//     let arr = []
//     for(let i=1; i < 1000000;i++){
//      arr.push(i)
//     }
//     setTimeout(()=> console.log("inside function print global object ",globalThis),1000000)
//     console.log(arr);
   
// }

// loopRun();
// console.log("outside of function print global object",globalThis)

// setTimeout(()=> console.log("hii"),0);

// setImmediate(()=> console.log("setImmediate function is call"))

//we can obj key we use number

// let newObj = {1:"a",2:"b",3:"d"};

// console.log(newObj.hasOwnProperty("a"));
// console.log(newObj.hasOwnProperty(1));

// console.log(undefined == null);


// let obj = {a:"qwe",b:"tyui",a:"rtyuio"}

// console.log(obj);

// let person = {name:"vikash"};

// function showData(age){
//     console.log(`user name is ${this.name} and age is ${age}`);
// }

// console.log(showData.call(person,21));

// console.log(showData.bind(person,21));

// function sayHii(){
//     return () => 0
// }

// console.log(typeof sayHii()());

// let arr = [1,2,3,4];

// arr[6] = 12;  // index 4,5 are empty 

// console.log(arr);

// let arr = [1,2,3,4];

// arr[6] = arr;  // index 6 store  array infynity  time 

// console.log(arr[6]);
















