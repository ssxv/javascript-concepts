// Currying is a technique used in functional programming where a function with multiple arguments is 
// transformed into a sequence of nested functions, each taking a single argument. The result of each 
// nested function is another function that takes the next argument until all arguments have been provided, 
// and then the final result is returned.

// Here's an example of currying in JavaScript:

// Normal function with multiple arguments
function add(a, b, c) {
    return a + b + c;
}

// Curried version of the add function
function curryAdd(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

// Usage
console.log(add(1, 2, 3)); // Output: 6

const curriedAdd = curryAdd(1)(2);
console.log(curriedAdd(3)); // Output: 6
// In the example above, the curryAdd function takes the first argument a, then returns a function that takes
// the second argument b, which in turn returns a function that takes the third argument c.
// This allows us to call curryAdd(1)(2)(3) to get the result 6.

// Currying is useful in scenarios where you want to create specialized versions of a function with some of
// its arguments pre-filled. It helps in creating more flexible and reusable code, especially in
// functional programming paradigms. Additionally, currying can also be achieved using higher-order functions
// and closures in JavaScript.
