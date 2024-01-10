// Operators
/*
Arthimatic  - +, -, / , *, %..
Comparision - ==, ===, <, >, !=, !==
bitwise operators - &, |, ~
assignment - =, +=, -=, /=, *=...
Logical Operators - &&, || , !
urinary operators - ++, --
ternary operators - ?=
*/

// String built in methods
/*
  length, toUpperCase, toLowerCase, slice, trim, split, join
  concat, replace, repeat, pad
*/

// Math, Date

// Map - applying common function on all elements present in array
let numsArr = [4, 10, 5, 6, 1, 2, 7, 3]
let sqArr = numsArr.map((num) => num * num); // 1, 4, 9, 16..
console.log(sqArr);

// filter - 
let numsGrtThan3 = numsArr.filter((num) => num > 3);
console.log(numsGrtThan3); // [ 4, 5, 6 ]

// isEven
let evenNums = numsArr.filter((n) => n % 2 == 0);
console.log(evenNums); // [ 2, 4, 6 ]

// reduce
let sum = numsArr.reduce((x, y) => x * y);
console.log(sum);// 720

// forEach
console.log("forEach: ")
numsArr.forEach(n => console.log(n));

// sort
numsArr.sort((a, b) => compareFunc(a, b));

console.log(numsArr)
function compareFunc(x, y) {
    if (x >= y) {
        return -1;
    } else {
        return 1;
    }
}

//option 2
numsArr.sort((x, y) => x > y ? 1 : -1);
console.log(numsArr);

// Object Destructuring
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
// without object destructuring
console.log(person.firstName);
console.log(person.age);

// with object destructuring
const { firstName, lastName, age } = person;
console.log(firstName);
console.log(age);

// Array Destructuring
console.log(person.contactNos[0]);

const [ph1, ph2] = person.contactNos;
console.log(ph1);
console.log(ph2);

const [addr1, addr2] = person.address;
console.log(addr1);
console.log(addr1.city);

// Classes
// Create class
class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
// create objects
let p1 = new Product("Backpack", 200);
let p2 = new Product("Shirt", 250);

// read product property values
console.log(p1.title);
console.log(p2.price);


/*
  newArr to store result
  iterate arr - for/while
    square/cube
    push result to new array
  return newArr;
   
*/

/*
    Create new array to store result
    iterate array - for/while
       based on condition filter elements and push to newArr - if
    return newArr
*/







