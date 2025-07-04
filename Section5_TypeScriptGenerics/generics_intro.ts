export {}

// We need better type support for a function like this
function toArray(arg: any) {
    return [arg]
}

const myArray = toArray('My name')

// Solution 1
// This is not great as each type needs it's own implementation

function toArrayFromString(arg: string) {
    return [arg]
}

function toArrayFromNumber(arg: number) {
    return [arg]
}

function toArrayFromBoolean(arg: boolean) {
    return [arg]
}

// Solution 2 - Generics!
function toArrayGeneric<T>(arg: T): [T] {
    return [arg]
}

const myNameArray = toArrayGeneric('My name') // We dont need to specify anything here because TS can infer it based on the argument
const myNameArray2 = toArrayGeneric<string>('My name') // We can also pass the type explicitly
