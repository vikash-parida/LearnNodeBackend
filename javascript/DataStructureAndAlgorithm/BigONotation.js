// Big O notation 


// calculate sum of all number 1 to n number
// 1  approach

function sumOfAllNumber(n){
  let result = 0;
    for (let i = 1; i <= n; i++) {
         result +=  i ; 
    }
    return result;
}
let t1 = performance.now();
sumOfAllNumber(10000)
let t2 = performance.now();

console.log(`times of code run ${(t1 - t2 / 2)}`);

// 2  approach

function sumOfAllNumber2(n){
    return n * (n + 1) / 2;
}


let t3 = performance.now();
sumOfAllNumber2(10000);
let t4 = performance.now();

console.log(`time of code run ${(t3 - t4 / 2)}`);

