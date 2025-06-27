"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEmployee = createEmployee;
const crypto_1 = require("crypto");
function generateRandomeId() {
    return (0, crypto_1.randomBytes)(10).toString('hex');
}
function createEmployee(employeeName, salary) {
    return {
        name: employeeName,
        id: generateRandomeId(),
        email: `${employeeName}@coolcompany.com`,
        salary: salary
    };
}
const Peter = createEmployee('Peter', 100000);
const Dan = createEmployee('Dan', 80000);
const allNewEmployees = [Peter, Dan];
const sendWelcomeMessage = (employee) => {
    console.log(`To: ${employee.email}
        Hello ${employee.name}!
        Welcome to our awesome company!
        Your salary will be ${employee.salary}
    `);
};
allNewEmployees.forEach(sendWelcomeMessage);
