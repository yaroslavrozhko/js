function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        console.log("Cannot divide by zero!");
        return null;
    }
    return a / b;
}

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, num) => add(total, num), 0);

console.log("Sum:", sum);

const differences = numbers.map(num => subtract(num, 1));

console.log("Differences:", differences);

const products = numbers.map(num => multiply(num, 2));

console.log("Products:", products);

const quotients = numbers.map(num => divide(num, 2));

console.log("Quotients:", quotients);

const data = [
    { name: "Alice", age: 25, active: true },
    { name: "Bob", age: 30, active: false },
    { name: "Charlie", age: 35, active: true },
    { name: "Dave", age: 40, active: false }
];

const activeUsers = data.filter(user => user.active);

console.log("Active Users:", activeUsers);

const userNames = data.map(user => user.name);

console.log("User Names:", userNames);

function getUserAge(name) {
    const user = data.find(user => user.name === name);
    if (user) {
        return user.age;
    } else {
        console.log("User not found");
        return null;
    }
}

console.log("Alice's Age:", getUserAge("Alice"));

function incrementAge(user) {
    user.age += 1;
}

data.forEach(incrementAge);

console.log("Data after incrementing age:", data);

function printUserInfo(user) {
    console.log(`Name: ${user.name}, Age: ${user.age}, Active: ${user.active}`);
}

data.forEach(printUserInfo);

for (let i = 0; i < 10; i++) {
    console.log(`Count: ${i}`);
}

let x = 10;
let y = 20;

while (x < y) {
    console.log(`x: ${x}, y: ${y}`);
    x++;
    y--;
}

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log("Max number:", findMax(numbers));

function isEven(num) {
    return num % 2 === 0;
}

const evenNumbers = numbers.filter(isEven);

console.log("Even Numbers:", evenNumbers);

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log("Factorial of 5:", factorial(5));

function sumOfArray(arr) {
    let total = 0;
    for (const num of arr) {
        total += num;
    }
    return total;
}

console.log("Sum of Array:", sumOfArray(numbers));

const squareNumbers = numbers.map(num => num * num);

console.log("Square Numbers:", squareNumbers);

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log("Reverse of 'hello':", reverseString("hello"));

const namesLength = data.map(user => user.name.length);

console.log("Length of User Names:", namesLength);

function isAdult(age) {
    return age >= 18;
}

console.log("Is 16 an adult?", isAdult(16));
console.log("Is 20 an adult?", isAdult(20));

const userStatus = data.map(user => ({
    name: user.name,
    status: user.active ? "Active" : "Inactive"
}));

console.log("User Status:", userStatus);

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

console.log("Full Name:", getFullName("John", "Doe"));

const items = ["apple", "banana", "cherry", "date"];

const capitalizedItems = items.map(item => item.toUpperCase());

console.log("Capitalized Items:", capitalizedItems);

function calculateSquareRoot(number) {
    if (number < 0) {
        console.log("Cannot calculate square root of a negative number");
        return null;
    }
    return Math.sqrt(number);
}

console.log("Square root of 16:", calculateSquareRoot(16));
console.log("Square root of -4:", calculateSquareRoot(-4));
