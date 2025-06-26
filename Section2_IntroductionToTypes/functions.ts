// Functions
// Note: semicolons are not required, however, they are great for code clarity and readability

// Must define the type here as you cannot have an explicit any unless specified in the tsconfig.json
// You can let TS infer the return type if it is using a primitive
function greet(name: string) : string {
    return ('Hello ' + name)
}

const johnGreet = greet('John');

function greetToUpperCase(name: string) {
    return ('Hello ' + name.toUpperCase())
}

function consoleGreetJohn(name = 'John') {
    console.log('Hello ' + name.toUpperCase())
}

consoleGreetJohn();
consoleGreetJohn('Bill');

// Arrow function
const greetToConsole = (name: string) => {
    console.log('Hello ' + name);
}

// Multiple params
function greetMultiple(...names: string[]) {
    names.forEach(name => {
        greetToConsole(name)
    })
}

greetMultiple('John');
greetMultiple('John', 'Mary');