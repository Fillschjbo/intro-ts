const text:string = "this is text";
const number:number = 42;
const bool:boolean = true;

const numberArray:number[] = [1, 2, 3];
const stringArray:string[] = ["one", "two", "three"];

const obj:{ id:number; name:string } = {
  id: 1,
  name: "Ola",
};

let canChangeType:any = 10;
canChangeType = "now a string";
console.log(canChangeType);


//best practice
let canChangeType2: number | string = 10;
canChangeType2 = "now a string";
console.log(canChangeType2);