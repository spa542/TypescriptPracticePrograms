export {}
// Any / Unknown
let queryResult: any = 5; // disable type checking
queryResult = '5';
queryResult = [5];

function getSalaryFromExternalService(employeeId: number) {
    return JSON.parse('5') // Returns an object from the string => we have no idea the exact type
}

let salary: unknown = getSalaryFromExternalService(123);

// Unknown will force type narrowing
// This will specify to TS the available methods available for the var/object
if (typeof salary === 'number') {
    salary++;
}
if (typeof salary === 'string') {
    salary.includes('$');
}
if (typeof salary === 'string' || typeof salary === 'number') {
    salary.valueOf();
}

if (salary &&
    typeof salary === 'object' &&
    'history' in salary &&
    Array.isArray(salary.history)) {
    salary.history.push(12000); // At this point, we know the variable salary has certain properties based on the type narrowing
}

// When to use any?
// Start of JS to TS migration
// Inside unit tests