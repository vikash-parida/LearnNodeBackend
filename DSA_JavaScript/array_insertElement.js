// insert element in a array in any position 


let newArrayValue = [30,60,80,10,90]; 

// array in ele insert using loop 

// let newEle  = 20;

// let positionIndex = 1;

// for(let i = newArrayValue.length-1 ;i >= 0 ;i--){  //  loop start with last index value move next index

//     if(i>= positionIndex){
//         newArrayValue[i+1] = newArrayValue[i];
//         if(i == positionIndex){
//             newArrayValue[i] = newEle;
//         }
//     }
// }

// array in ele insert using splice method in js

newArrayValue.splice(2,0,2000);



console.log(newArrayValue);