export {}

// We cannot have multiple functions with the same name, however, we can have different functions with multiple non-named parameters

// Multiple overloads
function oneYearAgo(date: Date): Date
function oneYearAgo(date: string): string
function oneYearAgo(date: Date | string) {
    const oneYearAgo = new Date(date);
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

    if (typeof date === 'string') {
        return oneYearAgo.toLocaleDateString();
    } else {
        return oneYearAgo;
    }
}

const lastYearDate = oneYearAgo(new Date());
const lastYearString = oneYearAgo('2025-07-06');


// First solution
function paySalary(monthlySalary: number): void
function paySalary(monthlySalary: number, hoursOvertime: number, payPerHour: number): void
function paySalary(monthlySalary: number, hoursOvertime?: number, payPerHour?: number) {
    let overtimePay = 0;
    if (hoursOvertime && payPerHour) {
        overtimePay = hoursOvertime * payPerHour;
    }
    const totalPayment = monthlySalary + overtimePay;
    console.log(`For this month, you received ${totalPayment}`)
}

paySalary(5000);
paySalary(5000, 10, 10);
// Expecting an error here and turn off the check
// @ts-expect-error
paySalary(5000, 20);

// Another solution
function paySalaryWithOptionsObject(monthlySalary: number, overtime?: {hours: number, payPerHour: number}) {}

paySalaryWithOptionsObject(122345, {hours: 10, payPerHour: 10})
