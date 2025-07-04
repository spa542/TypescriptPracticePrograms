
// let will allow the item to be mutable
const CEO = 'Jeff' // strings are immutable

// CEO = 'Bill' // This is not allowed


const CeoObject = { // objects are not immutable
    name: 'Jeff' as const, // One attribute set to readonly
    company: 'Amazon'
} as const // Set the whole object to readonly

//CeoObject.name = 'Bill' // This is not allowed

function toUpperCaseNames(names: readonly string[]) { // ReadonlyArray<string> is the same as readonly string[]
    //names.push('My Name') // This is not allowed
    return names.map(name => name.toUpperCase())
}

type Position = 'Programmer' | 'Manager' | 'HR' | 'Scrum Master'

type Employee = {
    name: string,
    position: Position
}

function paySalary(empl: Employee) {
    console.log(`Paying salary to ${empl.position} is 10000`) // Dangerous action accessing position here!
}

//const john: Employee = {  // We can set the type here so that TS has an exlicit type to validate 
const john = { 
    name: 'John',
    position: 'Programmer'
} as const // We can set the position as readonly so that it cannot be changed in the future

paySalary(john)
