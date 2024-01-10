
// single line comment
/*
    multi
    line 
    comment
*/

// variables
// let, (var, const -ES6)

// declaration
// let - block scope
let x = 10;
let y = 100;

// read variables
console.log(x);
console.log(y);

// Ctrl + Alt + N

// var - global scope 
var i1 = 20;
var j = 300;

console.log(i1);
console.log(j);

for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// console.log(i); //  ReferenceError: i is not defined


for (var i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}
console.log(i); // 5

// const
const PI = 3.14;
// PI = 3.15; // TypeError: Assignment to constant variable.

// Coding standards
/*
    CONSTANTS           - UPPER CASE
    Variable/Functions  - lowerCamelCase
    classes/interfaces  - UpperCamelCase
    packages            - lowercase
*/

// Data types
// Number  - 102, 123.23
// string  - '', ""
// boolean - true/false
// NaN
// Object - Objects & Arrays

// typeof()
console.log(typeof (100)); // number
console.log(typeof (100.00)); // number
console.log(typeof ('hello')); // string
console.log(typeof ("Hi")); // string
console.log(typeof ('true')); // string
console.log(typeof (true)); // boolean
console.log(typeof (null)); // object

// let x1 = 10 / 0;
// console.log(typeof (x1));

// Create object

const person = {
    firstName: "Raj",
    lastName: "K",
    age: 10,
    contactNos: [9999911111, 9999912345],
    address: [
        {
            dNo: 1234,
            street: "T.Nagar",
            city: "Chennai",
            state: "Tamilnadu"
        },
        {
            dNo: 1234,
            street: "Whitefield",
            city: "Bangalore",
            state: "Karnataka"
        }
    ]
};

// Read object
console.log(person.firstName);
console.log(person.age);
console.log(person.contactNos);//  [9999911111, 9999912345]
console.log(person.contactNos[0]); //9999911111
console.log(person.contactNos[1]); //9999912345
console.log(person.contactNos[2]);//undefined
console.log(person.address);// [{}, {}]
console.log(person.address[0]);// {1st address}
console.log(person.address[1]);// {2nd addr}

console.log(person.address[0].city);// Chennai
console.log(person.address[1]["city"]);// Bangalore

// Update
person.firstName = "Raj Kumar";
person.age = 11;
person.contactNos.push(9999933333);
person.address[0].dNo = 2335;
console.log(person);


// person = {}; //TypeError: Assignment to constant variable.



// create array
const colors = ['red', 'green', 'orange'];

console.log(typeof (person)); // object
console.log(typeof (colors)); // object

// read array
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

// add new color
console.log(colors);
colors.push('white')
console.log(colors);

// slice - sub set of elements present in array
console.log(colors.slice(0, 2)); //[ 'red', 'green' ]

// splice -re 
console.log(colors);
colors.splice(0, 1); // removes 0th element
console.log(colors);

// length
console.log(colors.length); //3

// reverse
console.log(colors.reverse()); // [ 'white', 'orange', 'green' ]

// indexOf()
console.log(colors.indexOf("orange")); //1

// sort()
console.log(colors.sort());

// Variables - let, var, const
// typeOf
// Data types - number, string, object, boolean
// Object
// Array
// loops - for, while, if, if-else
// Operators

// functions
// define function
function addThreeNums(x, y, z) {
    let result = x + y + z;
    return result;
}

// call function
console.log(addThreeNums(10, 20, 30));

function addTwoNums(num1, num2) {
    return num1 + num2;
}
console.log(addTwoNums(10, 20));

// find given number is even/odd
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(parseInt(10.24))); //true

function greet() {
    console.log("Hello World");
}
greet();

// convert strings present in array to upper case
function toUpper(strArr) {
    ;// 5 element
    // create new array to store updated values
    let newArr = [];

    // read one element at a time present in an array
    for (let i = 0; i < strArr.length; i++) {
        // convert element to upper case
        let newStr = strArr[i].toUpperCase();
        // store result in new array
        newArr.push(newStr);
    }
    // return new array
    return newArr;
}

console.log();
console.log("Before: " + colors);
console.log("After: " + toUpper(colors));

// Default/optional parameter functions
function sub(x, y = 10) {
    let result = x - y;
    return result;
}

console.log(sub(20, 10)); // 10
console.log(sub(10)); //0

// Rest parameters(...) - ES6 features
// One function that can take any number of parameters
function mul(x, y, ...nums) {
    ;// 2, 3, 4, 5
    let result = x * y; // 6
    // for (let i = 0; i < nums.length; i++) {
    //     result = result * nums[i]; // 6*4= 24
    // }
    var i = 0;
    while (i < nums.length) {
        result = result * nums[i];
        i++;
    }

    return result;
}

console.log(mul(2, 3));
console.log(mul(2, 3, 4));
console.log(mul(2, 3, 4, 5));
console.log(mul(2, 3, 4, 5, 6));


// Spread operator (...) - ES6
// copy one array elements into another array

let shapes = ['circle', 'triangle', 'cube'];
let newShapes = [...shapes];

console.log("newShapes: " + newShapes);

let newShapes2 = ['square', ...shapes];
let newShapes3 = ['cone', ...shapes, 'rectangle'];
console.log(newShapes2);
console.log(newShapes3);

/*
 create new array
 for - iterate old array
   - copy old arr element into new array
 return new array

*/

// Arrow functions/anonymous functions - ES6
// 1. function keyword not required.
// 2. function name not required.
// 3. insert => between input args & body function
// 4. if function body is having only one statement, then {} brackets not required.
// 5. if function body is having only one statement, return keyword  not required
// 6. paranthesis are not required for input arguments, 
//    if function is having only one input argument.

/*
function greet() {
    console.log("Hello World");
}
*/
let greet2 = () => console.log("Hello World!!!");

// call arrow function
greet2();

// Function with one argument
/*
// find given number is even/odd
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
*/
let isEven2 = num => {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven2(15));

// arrow function with two or more input arguments
/*
function addTwoNums(num1, num2) {
    return num1 + num2;
}
*/
let add2 = (num1, num2) => num1 + num2;
console.log(add2(10, 20));
