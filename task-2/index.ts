const arrayOfNumbers:(string | number)[] = [1, 2, 3, 4, 5, "six"];
const arrayOfStrings:string[] = ["one", "two", "three"];

// hover "array" to look at type declaration
type Post = {
  id: number;
  content: string;
}

const array:(number | string | boolean | {id:number, content:string})[] = [1, "two", true, { id: 1, content: "test" }];

const array2:(number | string | boolean | Post)[] = [1, "two", true, { id: 1, content: "test" }];

type MyType = {
  id: number;
  name?: string;
  age?: number;
  content?: string;

}

const arrayOfObjects:  MyType[] = [
  { id: 1, name: "Ola", age: 23 },
  { id: 2, name: "Kari" },
  { id: 3, content: "Test content" },
];
