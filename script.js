// Rewrite the following code using a ternary operator:
// let result;
// if (score >= 80) {
//     result = "Pass";
// } else {
//     result = "Fail";
// }
//Solved

// const score = 40;
// let result;
// result = score >= 80 ? "Pass" : "Fail";
// console.log(result);



// Q:2 How does the optional chaining operator (?.) work, and how can it be used to access nested properties of an object?


// const user = {
//     name: 'Abdul Rafay',
//     address: {
//       city: 'Karachi',
//       postalCode: 755130
//     }
//   };
  
//   const city = user?.address?.city; 
//   console.log(city)





  
//Q: 3 Compare the for...in loop and the for...of loop in terms of their use cases and the types of values they iterate over.

// for in: Iterates over property keys of an object
// for in: Used for general-purpose object iteration and when dealing with the properties of an object.
// For Example 

// const person = {
//     name: 'John',
//     age: 30,
//     gender: 'Male'
//   };
  
//   for (const key in person) {
//     console.log(key, person[key]);
//   }
  
// for of: Used when you specifically want to iterate over values in iterable objects like arrays, strings, maps, sets, etc.
// for of: Iterates over values of iterable objects
// For Example
// const numbers = [1, 2, 3, 4, 5];

// for (const num of numbers) {
//   console.log(num);
// }

// Q:4 Define a function calculateAverage that takes an array of numbers as an argument and returns the average value.

// arr = [1,2,2,2,2,2,2,10];
// function calculateAverage(numbers) {   
    
//     const sum = numbers.reduce((sum, num) => sum + num);  
    
//     const average = sum / numbers.length;
  
//     return average;
//   }

// let result = calculateAverage(arr);
// console.log(result);


  
// Q: 5 Explain the concept of "closures" in JavaScript and provide an example of their practical use.

// Answer
// In JavaScript, closures are a powerful and fundamental concept that involves the combination of
//  functions and the lexical scope in which they are defined. A closure allows a function to retain access
//  to variables from its outer (enclosing) scope even after that scope has finished executing

// Code Example

// function func() {
//   const name = "Abdul Rafay";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = func();
// myFunc();



// Q: 6 Create an object named student with properties name, age, and grades. Add a method calculateAverage that calculates the average of the grades.

// const student = {
//   name: "Abdul Rafay",
//   age: 18,
//   grades: [10,20,30,40],

//   calculateAverage: function () {
//     let sum = this.grades.reduce((total, grade) => total + grade, 0);
//     let average = sum / this.grades.length;
//     return average;
//   }

// };

// console.log(student.calculateAverage());



// Q: 7 How can you clone an object in JavaScript and also give one example each deep copy, shallow copy, and reference copy

// const originalObject = {
//   name: "John",
//   age: 25,
//   address: {
//     city: "Example City",
//     country: "Example Country"
//   }
// };

// // Shallow Copy
// const shallowCopy = Object.assign({}, originalObject);

// // Deep Copy
// const deepCopy = JSON.parse(JSON.stringify(originalObject));

// // Refrence Copy
// const referenceCopy = originalObject;




// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < numbers.length; i++) {
//   const message = numbers[i] % 2 === 0 ? "Even" : "Odd";
//   console.log(`${numbers[i]} is ${message}`);
// }





// arr = [1,2,3,4,5,6,7,8];

// for(i = 0; i< arr.length; i++){
//     const result = arr[i] %2 === 0 ? "even" : "odd";
//     console.log(arr[i] ,"is equal to ",result);
// }




// Q: 8 Write a loop that iterates over an array of numbers and logs whether each number is even or odd, using a ternary operator.


// const numbers = [55,53,73,6443,7343,835,8452,753,363,4456,363544,375,36,83,84];

// for(i = 0; i < numbers.length; i++){
//     const result = numbers[i] %2 === 0 ? "even" : "odd";
//     console.log(`${numbers[i]} is equal to ${result}`);
// }



// Q: 9 Describe the differences between the for loop, while loop, and do...while loop in JavaScript. When might you use each?

// For Loop
// The for loop is a structure for iterating over a predefined range of values,
// with three components: initialization, condition, and iteration expression
// Use Case: When you know the exact number of iterations or want to iterate over a sequence of numbers.

//While Loop
//The while loop is employed when the exact number of iterations is uncertain, relying solely
//on a specified condition. It executes the provided code block as long as the condition evaluates to true
// Use Case: When the number of iterations is uncertain and depends on a specific condition.

//Do While
// The do...while loop is similar to the while loop but guarantees at least one
// execution of the code block, as the condition is checked after the initial iteration
// Use Case: When you want to ensure that the loop body is executed at least once, regardless of the initial condition




// Q: 10 Provide an example of using optional chaining within a loop to access a potentially missing property of an object.

// const clss = [
//     {id: 1, stud:{name: "Abdul rafay", email: "rafay@gmail.com"}},
//     {id: 2, stud:{name: "Taha", email: "taha@gmail.com"}} ,
//     {id: 3}
// ];


// for (const data of clss) {
//     const result = data?.stud?.name ?? "Unknown";
//     console.log(`id no: ${data.id} is: ${result}`);    
// }


// Q: 11 Write a for...in loop that iterates over the properties of an object and logs each property name and value

// const myObject = {
//     name: 'Abdul Rafay',
//     age: 19,
//     city: 'Karachi'
//   };
  
// for(const KEY in myObject){
//     const value = myObject[KEY];
//     console.log(KEY, value);
// }

//Q: 12 Explain the use of the break and continue statements within loops. Provide scenarios where each might be used.

//Break
// break in JavaScript is used to exit a loop prematurely, immediately moving to the code following the loop.

// let targetValue = 42;
// let array = [10, 23, 42, 15, 30];

// for (let i = 0; i < array.length; i++) {
//     if (array[i] === targetValue) {
//         console.log("Value found at index", i);
//         break; 
//     }
// }

// // Continue
// // continue is used to skip the remaining code in a loop for the current iteration and proceed to the next iteration.

// let numbers = [1, 5, 2, 8, 10, 3];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         continue; 
//     }
//     console.log("Processing odd number:", numbers[i]);
// }


// Q: 13 Write a function calculateTax that calculates and returns the tax amount based on a given income.
//  Use a ternary operator to determine the tax rate.



// const income = 10000;


// function taxCalculate(income) {
//     const taxRate = income < 20000 ? 0.1: 0.2;
//     const taxAmount = income*taxRate;
//     return taxAmount;

// }
// const result = taxCalculate(income);
// console.log(result);


//Q: 14 Create an object car with properties make, model, and a method startEngine that logs a message.
//  Instantiate the object and call the method

// const car = {
//     make: 'Porshe',
//     model: '911',
//     startEngine: function() {
//         console.log("Engine started. Enjoy your Ride");
//     }
// };

// car.startEngine();



//Q: 15 Explain the differences between regular functions and arrow functions in terms of scope, this binding, and their use as methods.


// Scope:

// Regular Functions: Have their own scope and this binding.
// Arrow Functions: Inherit scope from the surrounding lexical context.


// this Binding:

// Regular Functions: Have their own this binding, dynamically determined at runtime.
// Arrow Functions: Inherit this from the enclosing lexical context.


// Use as Methods:

// Regular Functions: Suitable for use as methods; bind this to the object.
// Arrow Functions: Less suitable for methods; inherit this, which may not be the intended object.








