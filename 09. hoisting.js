// Hoisting makes some kind of variables accessible/usable even before they are declared
// Before execution, code is scanned for variable declarations (creation phase)
// and for each variable a new property is created in the execution context's variable environment

// Follow below data for hoisting

// 1. function declaration/ anonymous functions
// hoisted: true
// initial value: set to function itself
// scope: block for strict mode and finction for loose mode
// Call to function before its declaration works
calcAge(1995)
function calcAge (birthYear) {
    return 2024 - birthYear
}

// 2. variable declared with var
// hoisted: true
// initial value: set to undefined
// scope: function scope
// Variables declared with var keyword are accessible before their declaration, will hold value as undefined
console.log(age)
var age = 29

// 3. variabled declared with let, const
// hoisted: false
// initial value: they are uninitialized. Hence accessing them before delcaring gives error because they are kep in "temporal dead zone"
// scope: block

// 4. function expression and arrow function.
// hoisted: true if declared with var, false if declared with let or const
// initial value: undefined if declared with var, uninitialized if declared with let or const
// scope: function scoped if declared with var, block scoped if declared with let or const

// Temporal dead zone makes it easier to catch error when we use variables before declaring
