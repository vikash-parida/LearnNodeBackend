// merge two array using while loop in javaScript


let data1 = [2,4,6,8,10,12,13];

let data2 = [3,5,7,9,11];

let data3 = [];

let d1 = 0;
let d2 = 0;
let d3 = 0;


while(d1<data1.length && d2<data2.length){
    if(data1[d1]<data2[d2]){
        data3[d3] = data1[d1];
        d1++;
    }else{
        data3[d3] = data2[d2];
        d2++;
    }
    d3++;
}

while (d1<data1.length){
data3[d3] = data1[d1]
d1++
d3++
   
}

console.log(data3);







