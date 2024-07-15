// Callbacks:
// Callbacks are functions passed as arguments to other functions to be executed later. They are the oldest asynchronous programming technique in JavaScript.
// Callbacks are simple and widely supported in JavaScript, making them easy to understand and use.
// However, managing deeply nested callbacks (known as "callback hell") can lead to unreadable and unmaintainable code.
// Callbacks don't handle errors well, often leading to "error-first" callback patterns which can be verbose and error-prone.
// They have minimal overhead since they are just regular function calls.


// Promises:
// Promises provide a cleaner and more structured way to handle asynchronous code compared to callbacks.
// They represent a value that may be available now, or in the future, or never.
// Promises support chaining and provide built-in error handling using the .then() and .catch() methods.
// Promises are easier to reason about than callbacks and help to avoid callback hell.
// However, promise chains can still become long and difficult to manage in complex scenarios.
// Promises introduce a bit more overhead compared to callbacks because they involve creating promise objects and managing their state.
// Promise chains can sometimes be less efficient than callbacks, especially when chaining multiple .then() methods, as each one adds a new microtask to the microtask queue.


// Async/await:
// Async/await is a more recent addition to JavaScript, introduced in ES2017 (ES8), and it provides a more concise and synchronous-like way to write asynchronous code.
// It allows you to write asynchronous code in a synchronous manner, making it easier to understand and maintain.
// Async functions return promises implicitly, and you can use the await keyword to wait for a promise to settle.
// Async/await greatly simplifies error handling compared to promises.
// Async/await is built on top of promises and is compatible with existing promise-based code.
// However, async/await is not supported in older JavaScript environments, and transpilation might be required for backward compatibility.
// Async/await is built on top of promises and has similar performance characteristics.

// while there may be slight differences in performance between callbacks, promises, and async/await,
// they are usually not significant enough to impact most applications. The choice between them should
// primarily be based on readability, maintainability, and the specific requirements of your codebase.