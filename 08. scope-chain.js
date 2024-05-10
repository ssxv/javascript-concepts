function outerFunction(birthYear) {
    const age = 2024 - birthYear

    function innerFunction() {
        // firstname from global, age and birthYear from outerFunction scope are available here
        const output = `${firstName}, you are ${age}, born in ${birthYear}`
        console.log(output)

        if (birthYear >= 1981 && birthYear < - 1996) {
            const firstName = 'Steve'
            var millenial = true
            // firstName is available in local scope. wont check in global scope
            const str = `Oh, and you are millenial, ${firstName}`
            console.log(str)
        }
        // str is declared with const, making it a block scoped variable. Thus wont be available here.
        // console.log(str)
        // millenial is declared with a var, making it global.
        console.log(millenial)
    }

    innerFunction()
}

const firstName = 'Pranit'

// age is not in the current or parent scope. Thus won't be available here.
// console.log(age)