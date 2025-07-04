export {}

type Position = 'Programmer' | 'Manager' | 'HR' | 'Scrum Master'

type Employee = {
    name: string,
    position: Position
}

// keyof only works on other types!!!
type EmployeeKeys = keyof Employee // 'name' | 'position'

const john: Employee = {
    name: 'John',
    position: 'Programmer'
}

john.name
john['name']

//function getProperty(arg: any, key: string) { // This is bad because we dont know what we are getting now!
function getProperty(arg: Employee, key: string) {
    console.log(arg[key])
    return arg[key]
}

// At this point, typescript knows we can only use this with the appropriate keys of type T
function getProperty2<T, K extends keyof T>(arg: T, key: K): T[K] {
    console.log(arg[key])
    return arg[key]
}

const johnsName = getProperty2(john, 'name')
getProperty2(john, 'position')
//getProperty2(john, 'age') // will fail!

function getObjectKeys2<T extends object>(arg: T) {
    return Object.keys(arg)
}

function getObjectKeys<T extends Record<string, any>>(arg: T): Array<keyof T> {
    return Object.keys(arg)
}

const someKeys = getObjectKeys([])
const existingKeys = getObjectKeys({
    abc: 'def'
})
