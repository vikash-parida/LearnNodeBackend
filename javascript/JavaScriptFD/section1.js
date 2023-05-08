function printName(){
    return `my name is vikash parida`;
}

function findMyName(){
    return printName()
}

function sayName(){
    return findMyName();
}


console.log(sayName());