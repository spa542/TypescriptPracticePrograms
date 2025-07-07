import { Employee, printEmployee } from './utils'; // Relative import
// Type imports
//import { type Employee, printEmployee } from './utils'; // Relative import
import { randomUUID } from 'crypto'; // Absolute import
//import { MySpecialType } from '@superUtils';

const john: Employee = {
    name: 'John',
    age: 30,
}

printEmployee(john)
console.log(randomUUID())
