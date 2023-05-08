//Lexical Environment

function printName(){
    return `my name is vikash parida`;
}

function findMyName(){

    function a(){

    }  
 a()
 return printName()
}

function sayName(){
    return findMyName();
}


console.log(sayName());