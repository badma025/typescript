// Basic Types
let id: number = 5;
let company: string = "codingwhizz";
let isPublished: boolean = true;
let x: any = "hello";

// so ids must be an array of numbers
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "bye"];

// Tuple

// so in our person array the first value must be a number, the second a string and the third a boolean
let person: [number, string, boolean] = [1, "2", true];

// Tuple Array

// so this must be an array containing arrays of a number and string
let employee: [number, string][];

employee = [
  [1, "Alex"],
  [2, "John"],
  [3, "Peter"],
];

// Union

// so pid can be a string or a number
let pid: number | string;
pid = "22";

// Enum

// enums allow you to define a set of named constants
enum Direction1 {
  Up, // index 0
  Down, // index 1
  Left, // index 2
  Right, // index 3
}

console.log(Direction1.Right); // gives us 3

enum Direction2 {
  Up = 7,
  Down, // index 8
  Left, // index 9
  Right, // index 10
}

console.log(Direction2.Left); // gives us 9

enum Direction3 {
  Up = "Up", // index "Up"
  Down = "Down", // index "Down"
  Left = "Left", // index "Left"
  Right = "Right", // index "Right"
}

console.log(Direction3.Left); // gives us "Left"

// Objects

// so here user must be an object where the id is a number and name is a string
const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "Alim",
};

// that looks a little messy, so we use types instead:

type User2 = [
  { age: number; name: string; surname: string },
  { age: number; name: string; surname: string }
];

// typescript is expecting two objects with an age as a number, a name which is a string and a surname which is a string
const user2: User2 = [
  { age: 13, name: "Alim", surname: "Badmus" },
  { age: 17, name: "Mike", surname: "Oxlong" },
];

// Type Assertion
let cid: any = 1234567;

/* so our customer variable is now 1234567, but as a string;
 "1234567" */
let customer = <string>cid;
// customer = 5  <- would give us an error

// Functions

// so this function wants 2 parameters which must be numbers
function addNum(x: number, y: number): number {
  return x + y;
}

// console.log(addNum(1, "2")) <- gives us an error as "2" is not a number

// so our param message can be a string or number
function log(message: string | number): void {
  console.log(message);
}

// Interfaces

// they work in the same way as types
// age is optionsl
// id is readonly - cannot be reassigned
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user3: UserInterface = {
  id: 1,
  name: "Alim",
  age: 13,
};

// unions cannot be used with interfaces

// interface Point = number | string <- does not work
// type Point = number | string <- does work

// Function Interfaces

interface MathFunc {
  (x: number, y: number): number;
}

const power: MathFunc = (x, y) => {
  return x ** y;
};

const sub: MathFunc = (x, y) => {
  return x - y;
};

console.log(power(43, 56));

// Generics
function getArray(items: any[]): any[] {
  return new Array().concat(items);
}

let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["Alim", "John", "Peter", "Alex"]);

// this is fine as the function we have takes in any type
numArray.push("hello")

// the array has to be items of the same type and the item you pass in has to be of the same type as the array
// type argument
function getArray2<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray2 = getArray2<number>([1, 2, 3, 4]);
let strArray2 = getArray2<string>(["Alim", "John", "Peter", "Alex"]);

// numArray2.push("hello") <- no longer works because numArray2 has numbers and "hello" is not a number type
// expects a number


