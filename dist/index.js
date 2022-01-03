"use strict";
// Basic Types
let id = 5;
let company = "codingwhizz";
let isPublished = true;
let x = "hello";
// so ids must be an array of numbers
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "bye"];
// Tuple
// so in our person array the first value must be a number, the second a string and the third a boolean
let person = [1, "2", true];
// Tuple Array
// so this must be an array containing arrays of a number and string
let employee;
employee = [
    [1, "Alex"],
    [2, "John"],
    [3, "Peter"],
];
// Union
// so pid can be a string or a number
let pid;
pid = "22";
// Enum
// enums allow you to define a set of named constants
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Right); // gives us 3
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 7] = "Up";
    Direction2[Direction2["Down"] = 8] = "Down";
    Direction2[Direction2["Left"] = 9] = "Left";
    Direction2[Direction2["Right"] = 10] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left); // gives us 9
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "Up";
    Direction3["Down"] = "Down";
    Direction3["Left"] = "Left";
    Direction3["Right"] = "Right";
})(Direction3 || (Direction3 = {}));
console.log(Direction3.Left); // gives us "Left"
// Objects
// so here user must be an object where the id is a number and name is a string
const user = {
    id: 1,
    name: "Alim",
};
// typescript is expecting two objects with an age as a number, a name which is a string and a surname which is a string
const user2 = [
    { age: 13, name: "Alim", surname: "Badmus" },
    { age: 17, name: "Mike", surname: "Oxlong" },
];
// Type Assertion
let cid = 1234567;
/* so our customer variable is now 1234567, but as a string;
 "1234567" */
let customer = cid;
// customer = 5  <- would give us an error
// Functions
// so this function wants 2 parameters which must be numbers
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(1, "2")) <- gives us an error as "2" is not a number
// so our param message can be a string or number
function log(message) {
    console.log(message);
}
const user3 = {
    id: 1,
    name: "Alim",
    age: 13,
};
const power = (x, y) => {
    return x ** y;
};
const sub = (x, y) => {
    return x - y;
};
console.log(power(43, 56));
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["Alim", "John", "Peter", "Alex"]);
// this is fine as the function we have takes in any type
numArray.push("hello");
// the array has to be items of the same type and the item you pass in has to be of the same type as the array
// type argument
function getArray2(items) {
    return new Array().concat(items);
}
let numArray2 = getArray2([1, 2, 3, 4]);
let strArray2 = getArray2(["Alim", "John", "Peter", "Alex"]);
// numArray2.push("hello") <- no longer works because numArray2 has numbers and "hello" is not a number type
// expects a number
