import type { Employee } from "../model/Employee.model";


export async function createEmployee(empl: Employee) {
    return empl.name + '123' 
}


export async function getEmployees(): Promise<Employee[]> {
    return [
        {
            name: "John Doe",
            employedAt: new Date(),
            id: "1",
            position: "Manager",
            salary: 1000
        },
        {
            name: "Jane Doe",
            employedAt: new Date(),
            id: "2",
            position: "HR",
            salary: 500000
        },
        {
            name: "Jesus Doe",
            employedAt: new Date(),
            id: "3",
            position: "Engineer",
            salary: 200
        }
    ]
}
