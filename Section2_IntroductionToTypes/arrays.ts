export {}
// By making this file a JS module as done above, we avoid compilation errors when the same variable name is used in other files

// Tuples
let employeeLockerCode: [string, number];
employeeLockerCode = ['John', 345];

// Arrays
const duties: string[] = ['write code'];
const duties2: Array<string> = ['write code'];

duties.push('fix bugs');
duties.map(duty => {
    console.log(duty.toUpperCase());
});

// Tuple usage
employeeLockerCode = ['5', 6];
employeeLockerCode.push(12);
console.log(employeeLockerCode);
