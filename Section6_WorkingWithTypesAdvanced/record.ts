export {}

type Employee = {
    name: string,
    position: string
    // Index signatures!!!!
    [key: string]: string | number // Any string key can be added
}

const john: Employee = {
    name: 'John',
    position: 'Programmer',
    // extend the object ??
    email: 'john@company.com',
    age: 30
}

// type EmployeeDictionary = {
//     [id: string]: Employee
// }

// Dont need to define a new type here since we have an existing type
const employeesRecords: Record<string, Employee> = {
    abc: john
}

const myEmployee = employeesRecords['abc']

// We get type safety for combining types:

// If I extend this, then we will get type error below in the salaries object
type Positions = 'Programmer' | 'Manager' | 'HR' | 'Scrum Master'

type PositionsSalaries = Record<Positions, {salary: number}>

const salaries: PositionsSalaries = {
    Programmer: {salary: 100000},
    Manager: {salary: 120000},
    HR: {salary: 110000},
    'Scrum Master': {salary: 130000}
}
