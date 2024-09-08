/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
    return a + b;
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
    return a - b;
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
    return a * b;
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number|null}
 */
function divide(a, b) {
    if (b === 0) {
        console.log("Cannot divide by zero!");
        return null;
    }
    return a / b;
}

/** @type {number[]} */
const numbers = [1, 2, 3, 4, 5];

/** @type {number} */
const sum = numbers.reduce((/** @type {number} */ total, /** @type {number} */ num) => add(total, num), 0);

console.log("Sum:", sum);

/** @type {number[]} */
const differences = numbers.map((/** @type {number} */ num) => subtract(num, 1));

console.log("Differences:", differences);

/** @type {number[]} */
const products = numbers.map((/** @type {number} */ num) => multiply(num, 2));

console.log("Products:", products);

/** @type {Array<number|null>} */
const quotients = numbers.map((/** @type {number} */ num) => divide(num, 2));

console.log("Quotients:", quotients);

/**
 * @typedef {{name: string, age: number, active: boolean}} User
 */

/** @type {User[]} */
const data = [
    { name: "Alice", age: 25, active: true },
    { name: "Bob", age: 30, active: false },
    { name: "Charlie", age: 35, active: true },
    { name: "Dave", age: 40, active: false }
];

/** @type {User[]} */
const activeUsers = data.filter((/** @type {User} */ user) => user.active);

console.log("Active Users:", activeUsers);

/** @type {string[]} */
const userNames = data.map((/** @type {User} */ user) => user.name);

console.log("User Names:", userNames);

/**
 * @param {string} name
 * @returns {number|null}
 */
function getUserAge(name) {
    /** @type {User|undefined} */
    const user = data.find((/** @type {User} */ user) => user.name === name);
    if (user) {
        return user.age;
    } else {
        console.log("User not found");
        return null;
    }
}

console.log("Alice's Age:", getUserAge("Alice"));

/**
 * @param {User} user
 */
function incrementAge(user) {
    user.age += 1;
}

data.forEach(incrementAge);

console.log("Data after incrementing age:", data);

/**
 * @param {User} user
 */
function printUserInfo(user) {
    console.log(`Name: ${user.name}, Age: ${user.age}, Active: ${user.active}`);
}

data.forEach(printUserInfo);

for (let i = 0; i < 10; i++) {
    console.log(`Count: ${i}`);
}

/** @type {number} */
let x = 10;
/** @type {number} */
let y = 20;

while (x < y) {
    console.log(`x: ${x}, y: ${y}`);
    x++;
    y--;
}

/**
 * @param {number[]} arr
 * @returns {number}
 */
function findMax(arr) {
    /** @type {number} */
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log("Max number:", findMax(numbers));

/**
 * @param {number} num
 * @returns {boolean}
 */
function isEven(num) {
    return num % 2 === 0;
}

/** @type {number[]} */
const evenNumbers = numbers.filter(isEven);

console.log("Even Numbers:", evenNumbers);

/**
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log("Factorial of 5:", factorial(5));

/**
 * @param {number[]} arr
 * @returns {number}
 */
function sumOfArray(arr) {
    /** @type {number} */
    let total = 0;
    for (const num of arr) {
        total += num;
    }
    return total;
}

console.log("Sum of Array:", sumOfArray(numbers));

/** @type {number[]} */
const squareNumbers = numbers.map((/** @type {number} */ num) => num * num);

console.log("Square Numbers:", squareNumbers);

/**
 * @param {string} str
 * @returns {string}
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log("Reverse of 'hello':", reverseString("hello"));

/** @type {number[]} */
const namesLength = data.map((/** @type {User} */ user) => user.name.length);

console.log("Length of User Names:", namesLength);

/**
 * @param {number} age
 * @returns {boolean}
 */
function isAdult(age) {
    return age >= 18;
}

console.log("Is 16 an adult?", isAdult(16));
console.log("Is 20 an adult?", isAdult(20));

/** @type {{name: string, status: string}[]} */
const userStatus = data.map((/** @type {User} */ user) => ({
    name: user.name,
    status: user.active ? "Active" : "Inactive"
}));

console.log("User Status:", userStatus);

/**
 * @param {string} firstName
 * @param {string} lastName
 * @returns {string}
 */
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

console.log("Full Name:", getFullName("John", "Doe"));

/** @type {string[]} */
const items = ["apple", "banana", "cherry", "date"];

/** @type {string[]} */
const capitalizedItems = items.map((/** @type {string} */ item) => item.toUpperCase());

console.log("Capitalized Items:", capitalizedItems);

/**
 * @param {number} number
 * @returns {number|null}
 */
function calculateSquareRoot(number) {
    if (number < 0) {
        console.log("Cannot calculate square root of a negative number");
        return null;
    }
    return Math.sqrt(number);
}

console.log("Square root of 16:", calculateSquareRoot(16));
console.log("Square root of -4:", calculateSquareRoot(-4));
