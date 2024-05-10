// Values are evaluated as either "truthy" or "falsy" when used in a boolean context, such as in an if statement or a logical operator
// Values that are considered "truthy" evaluate to true when converted to a boolean.
// Values that are considered "falsy" evaluate to false when converted to a boolean.

// Falsy values
if ('') {           // Empty string
    console.log('Falsy');
}

if (0) {            // Number 0
    console.log('Falsy');
}

if (NaN) {          // NaN
    console.log('Falsy');
}

if (null) {         // null
    console.log('Falsy');
}

if (undefined) {    // undefined
    console.log('Falsy');
}
