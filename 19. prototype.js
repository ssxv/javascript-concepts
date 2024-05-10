// In JavaScript, inheritance is primarily achieved through prototype chaining. 
// While the extends keyword introduced in ES6 (ECMAScript 2015) simplifies the syntax for inheritance, 
// it's essential to understand the underlying mechanism of prototype-based inheritance to grasp the 
// full power and flexibility of JavaScript's object-oriented capabilities. Here's an overview:

// Prototype-Based Inheritance:
// Every JavaScript object has a prototype. 
// Prototypes are essentially objects from which other objects inherit properties.

// When you access a property or method on an object, JavaScript first looks for it on the object itself. 
// If it doesn't find it there, it looks for it on the object's prototype. 
// This process continues recursively up the prototype chain until it reaches the Object.prototype object, 
// which is the final link in the chain.

// Inheritance in JavaScript is achieved by setting the prototype property of one constructor function 
// to an instance of another constructor function. This establishes a prototype chain, 
// allowing objects created by the first constructor to inherit properties and methods from the 
// prototype of the second constructor.

// Constructor function is a special type of function used to create and initialize objects created 
// with the new keyword.

// Suppose we have a Person constructor function that defines a basic person object with 
// name and age properties, along with a greet() method:
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// When a method is added to the prototype, it is shared among all instances of the object. 
// In contrast, if the method is added directly to the object within the constructor function, 
// each instance would have its own copy of the method, leading to unnecessary memory consumption. 
// By adding methods to the prototype, you ensure that all instances share the same method implementation, 
// thus saving memory.
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Now, let's create another constructor function called Student that inherits from Person
function Student(name, age, school) {
    Person.call(this, name, age); // Call the Person constructor to initialize name and age properties
    this.school = school;
}

Student.prototype = Object.create(Person.prototype); // Set Student's prototype to an instance of Person
Student.prototype.constructor = Student; // Reset constructor to Student

Student.prototype.study = function () {
    console.log(`${this.name} is studying at ${this.school}.`);
};

const john = new Person('John', 25);
john.greet(); // Output: Hello, my name is John and I am 25 years old.

const alice = new Student('Alice', 20, 'XYZ University');
alice.greet(); // Output: Hello, my name is Alice and I am 20 years old.
alice.study(); // Output: Alice is studying at XYZ University.

console.log(alice instanceof Student)
console.log(alice instanceof Person)
console.log(alice instanceof Object)
