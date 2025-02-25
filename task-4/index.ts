function returnValue<T>(value:T):T{
    return value
}

const numVal = returnValue<number>(10);
const textVal = returnValue<string>("text")

function sum <T>(num1:T, num2:T):T{
    return num1 + num2;
}

const num1:number = 2;
const num2:number = 10;

console.log(sum(num1,num2))
