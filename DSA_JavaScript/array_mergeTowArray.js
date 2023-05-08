let data1 = [1,2,3,4,5,6];
let data2 = [7,8,9,10,11,12,13,14,15];
let data3 = [];


for (let i = 0; i < data1.length; i++) {
  data3[i] = data1[i]
}

for (let i = 0; i < data2.length; i++) {
   data3[data3.length + i]  = data2[i]
    
}

console.log(data3);