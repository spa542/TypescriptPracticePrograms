import { Employee, printEmployee } from "./utils";
import { v4 } from "uuid";

const john: Employee = {
    name: "John",
    age: 30,
}

printEmployee(john)
console.log(v4())
    