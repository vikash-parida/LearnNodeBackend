

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


let data = {name:"vikas"};

console.log(delete data.name);
