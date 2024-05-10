// All functions have a property named prototype
// All the objects created with constructor function will get access to constructor functions prototype
// An Object does not have prototype. However, it can access the prototype of the parent function constructor using obj.__proto__

// Constructor function
const Person = function (firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
}

// calcAge is added to Person functions prototype, 
// thus making it available to all the objects that will be created using Person constructor function
Person.prototype.calcAge = function () {
    console.log(2024 - this.birthYear)
}

const rohit = new Person('Rohit', 'K')
rohit.birthYear = 1994
rohit.calcAge()


// Object.assign directly creates an object with prototye of assigned object
const PersonProto = {
    calcAge() {
        console.log(2024 - this.birthYear)
    },
    init(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }
}

const pranit = Object.create(PersonProto)
pranit.init('Pranit', 'Khadilkar')
pranit.birthYear = 1995
pranit.calcAge()

// Inheritance using constructor function
const Student = function (firstname, lastname, course) {
    Person.call(this, firstname, lastname)
    this.course = course
}

Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstname} and I study ${this.course}`)
}

const mike = new Student('Mike', 'K', 'Arts')
mike.birthYear = 1990
mike.introduce()
mike.calcAge()

console.log(mike instanceof Student)
console.log(mike instanceof Person)
console.log(mike instanceof Object)
