// Immediately Invoked Function Expression
(function () {
    console.log('This is IIFE. This will never run again')
})();

(() => console.log("This is IIFE with arrow function. This will never run again"))();

// One of the main purposes of using an IIFE is to create a new scope for the contained code.
// Variables declared within the IIFE are not accessible from outside the function, thus providing encapsulation and preventing variable name collisions.

// Since an IIFE is immediately invoked, its code is executed as soon as the script is encountered.
// This allows for initialization code to run immediately without needing to call the function explicitly.
