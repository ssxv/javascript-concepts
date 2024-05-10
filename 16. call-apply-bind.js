const A = {
    arr: [],
    addToArr(el) {
        this.arr.push(el)
    }
}

const B = {
    arr: []
}

// Calls a method of an object, substituting another object for the current object.
// @param thisArg — The object to be used as the current object.
// @param argArray — A list of arguments to be passed to the method.
A.addToArr.call(B, 'BFirst')
A.addToArr('AFirst')

// Calls the function, substituting the specified object for the this value of the function, 
// and the specified array for the arguments of the function.
// @param thisArg — The object to be used as the this object.
// @param argArray — A set of arguments to be passed to the function.
A.addToArr.apply(B, ['BSecond'])

// For a given function, creates a bound function that has the same body as the original function.
// The this object of the bound function is associated with the specified object, 
// and has the specified initial parameters.
// @param thisArg — An object to which the this keyword can refer inside the new function.
// @param argArray — A list of arguments to be passed to the new function.
const addToArr_B = A.addToArr.bind(B)
addToArr_B('BThird')

console.log(A)
console.log(B)
