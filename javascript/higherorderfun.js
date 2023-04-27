

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


