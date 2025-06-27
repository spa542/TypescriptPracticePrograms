import { randomBytes } from 'crypto';

export type Employee = {
    name: string;
    id: string;
    email: string;
    salary: number;
}

function generateRandomeId() {
    return randomBytes(10).toString('hex');
}

export function createEmployee(employeeName: string, salary: number) {
    return {
        name: employeeName,
        id: generateRandomeId(),
        email: `${employeeName}@coolcompany.com`,
        salary: salary
    }
}

const Peter = createEmployee('Peter', 100000);
const Dan = createEmployee('Dan', 80000);
const allNewEmployees = [Peter, Dan];


const sendWelcomeMessage = (employee: Employee) => {
    console.log(`To: ${employee.email}
        Hello ${employee.name}!
        Welcome to our awesome company!
        Your salary will be ${employee.salary}
    `);
}

allNewEmployees.forEach(sendWelcomeMessage);
