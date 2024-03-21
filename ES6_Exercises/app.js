//Module trong js
import message from "./message.js";
message("I'm fine. Kìn chá nà");
message("I'm fine. Kìn chá nà", "warn");
message("I'm fine. Kìn chá nà", "error");

//The Spread (...) Operator:
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year)

// The For/Of Loop
const cars = ["BMW", "Volvo", "Mini"];
let text = "";
let newArray = []

for (let x of cars) {
    text += x + " ";
    newArray.push(x);
}
console.log(text)
console.log(newArray)

// JavaScript Maps
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

console.log(fruits.get("apples"))

// JavaScript Classes
class Student {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}

const Thuy = new Student("Thuy", 22, "Ninh Thuan");
const Thu = new Student("Thu", 22, "Ben Tre")
console.log(Thuy, Thu)
//Enhanced object literals
var user = {
    name: "Thuy",
    age: 22,
    address: "Ninh Thuan",
    getName() {
        return this.name;
    },
    getAge() {
        return this.age;
    }
}

console.log(user.getName())

//
var flowers = ["Rose", "Cherry blossom", "Lilac"]
var [a, ...c] = flowers
console.log(c)


//Function Rest Parameter
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x)

//   string.method()
let text2 = "Hello world, welcome to the universe.";
console.log(text2.includes("world"))
console.log(text2.startsWith("Hello"))
console.log(text2.endsWith("universe."))

//   Array.from()
console.log(Array.from("Hello"))

// Array keys()
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits2.keys();

for (let x of keys) {
    console.log(x)
}

// Array find()
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find((value, index, array) => value > 9);
console.log(first)

// Math Methods
console.log(Math.trunc( 10 * Math.random()))