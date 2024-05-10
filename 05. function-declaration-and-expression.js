console.log(functionDeclaration(1995))
// This is a function declaration. Also called Anonymous functions.
// Call to an Anonymous function before its declaration works.
// Anonymous functions are block scoped for strict mode or they are function scoped
function functionDeclaration (birthYear) {
    return 2024 - birthYear
}
console.log(functionDeclaration(1995))






console.log(functionExpression(1995)) // Doesn't work
// This is a function expression. Also called as Named functions
// Named functions cannot be called before their initialization
const functionExpression = function (birthYear) {
    return 2024 - birthYear
}
console.log(functionExpression(1995))
